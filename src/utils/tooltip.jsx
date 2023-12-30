"use client";
import {
  FloatingDelayGroup,
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  useDelayGroup,
  useDelayGroupContext,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole
} from "@floating-ui/react";
import {
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useId,
  useLayoutEffect,
  useState
} from "react";
import '../index.css'

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

const TooltipGroupContext = createContext({
  groupId: undefined,
  placement: "top"
});

export const TooltipGroup = ({
  showDelay = 600,
  hideDelay = 200,
  timeout = 300,
  placement = "top",
  children
}) => {
  const groupId = useId();

  return (
    <TooltipGroupContext.Provider value={{ groupId, placement }}>
      <FloatingDelayGroup
        delay={{ open: showDelay, close: hideDelay }}
        timeoutMs={timeout}
      >
        <LayoutGroup>{children}</LayoutGroup>
      </FloatingDelayGroup>
    </TooltipGroupContext.Provider>
  );
};

export const Tooltip = ({
  content,
  showDelay,
  hideDelay,
  placement,
  children
}) => {
  const { placement: groupPlacement, groupId } = useContext(
    TooltipGroupContext
  );
  const { delay, isInstantPhase } = useDelayGroupContext();
  const showDelayFinal =
    showDelay || (typeof delay === "number" ? delay : delay.open) || 500;
  const hideDelayFinal =
    hideDelay || (typeof delay === "number" ? delay : delay.close) || 200;
  const placementFinal = placement || groupPlacement;
  const [open, setOpen] = useState(false);

  // unmounted -> initial -> positioned -> unmounted
  const [state, setState] = useState("unmounted");

  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context,
    isPositioned,
    placement: computedPlacement
  } = useFloating({
    placement: placementFinal,
    open,
    onOpenChange(open) {
      setOpen(open);
      if (open) {
        // We need additional check because onOpenChange will be triggered when we switch between tooltip elements
        if (state === "unmounted") setState("initial");
      }
    },
    middleware: [offset(5), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { delay: showDelayFinal, restMs: hideDelayFinal }),
    useFocus(context),
    useRole(context, { role: "tooltip" }),
    useDismiss(context)
  ]);

  const tooltipId = useId();
  useDelayGroup(context, { id: tooltipId });

  useLayoutEffect(() => {
    if (isPositioned && state !== "positioned") {
      setState("positioned");
    }
  }, [isPositioned]);

  const translate = {
    top: { translateY: 5 },
    bottom: { translateY: -5 },
    left: { translateX: 5 },
    right: { translateX: -5 }
  }[
    computedPlacement.includes("-")
      ? computedPlacement.split("-")[0]
      : computedPlacement
  ];

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: reference, ...children?.props })
      )}
      <FloatingPortal>
        {/* This element used to measure its size for position calculation, and later we render true tooltip */}
        {open && state === "initial" && (
          <div
            {...getFloatingProps({
              ref: floating,
              className: "Tooltip",
              style: {
                position: strategy,
                visibility: "hidden",
                top: 0,
                left: 0
              }
            })}
          >
            {content}
          </div>
        )}
        <AnimatePresence
          onExitComplete={() => {
            setState("unmounted");
          }}
        >
          {open && state === "positioned" && (
            <motion.div
              initial={isInstantPhase ? {} : { opacity: 0, ...translate }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              exit={{ opacity: 0, ...translate }}
              transition={{ duration: 0.2 }}
              layoutId={groupId}
              {...getFloatingProps({
                ref: floating,
                className: "Tooltip",
                style: {
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0
                }
              })}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {content}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
};
