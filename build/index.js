/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HiddenText": function() { return /* binding */ HiddenText; },
/* harmony export */   "LiveRegion": function() { return /* binding */ LiveRegion; },
/* harmony export */   "useAnnouncement": function() { return /* binding */ useAnnouncement; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const hiddenStyles = {
  display: 'none'
};
function HiddenText({
  id,
  value
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: id,
    style: hiddenStyles
  }, value);
}

const visuallyHidden = {
  position: 'absolute',
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(100%)',
  whiteSpace: 'nowrap'
};
function LiveRegion({
  id,
  announcement
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: id,
    style: visuallyHidden,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": true
  }, announcement);
}

function useAnnouncement() {
  const [announcement, setAnnouncement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const announce = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    if (value != null) {
      setAnnouncement(value);
    }
  }, []);
  return {
    announce,
    announcement
  };
}


//# sourceMappingURL=accessibility.esm.js.map


/***/ }),

/***/ "./node_modules/@dnd-kit/core/dist/core.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@dnd-kit/core/dist/core.esm.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoScrollActivator": function() { return /* binding */ AutoScrollActivator; },
/* harmony export */   "DndContext": function() { return /* binding */ DndContext; },
/* harmony export */   "DragOverlay": function() { return /* binding */ DragOverlay; },
/* harmony export */   "KeyboardCode": function() { return /* binding */ KeyboardCode; },
/* harmony export */   "KeyboardSensor": function() { return /* binding */ KeyboardSensor; },
/* harmony export */   "MeasuringFrequency": function() { return /* binding */ MeasuringFrequency; },
/* harmony export */   "MeasuringStrategy": function() { return /* binding */ MeasuringStrategy; },
/* harmony export */   "MouseSensor": function() { return /* binding */ MouseSensor; },
/* harmony export */   "PointerSensor": function() { return /* binding */ PointerSensor; },
/* harmony export */   "TouchSensor": function() { return /* binding */ TouchSensor; },
/* harmony export */   "TraversalOrder": function() { return /* binding */ TraversalOrder; },
/* harmony export */   "applyModifiers": function() { return /* binding */ applyModifiers; },
/* harmony export */   "closestCenter": function() { return /* binding */ closestCenter; },
/* harmony export */   "closestCorners": function() { return /* binding */ closestCorners; },
/* harmony export */   "defaultAnnouncements": function() { return /* binding */ defaultAnnouncements; },
/* harmony export */   "defaultCoordinates": function() { return /* binding */ defaultCoordinates; },
/* harmony export */   "defaultDropAnimation": function() { return /* binding */ defaultDropAnimation; },
/* harmony export */   "getBoundingClientRect": function() { return /* binding */ getBoundingClientRect; },
/* harmony export */   "getLayoutRect": function() { return /* binding */ getLayoutRect; },
/* harmony export */   "getScrollableAncestors": function() { return /* binding */ getScrollableAncestors; },
/* harmony export */   "getViewRect": function() { return /* binding */ getViewRect; },
/* harmony export */   "getViewportLayoutRect": function() { return /* binding */ getViewportLayoutRect; },
/* harmony export */   "rectIntersection": function() { return /* binding */ rectIntersection; },
/* harmony export */   "useDndContext": function() { return /* binding */ useDndContext; },
/* harmony export */   "useDndMonitor": function() { return /* binding */ useDndMonitor; },
/* harmony export */   "useDraggable": function() { return /* binding */ useDraggable; },
/* harmony export */   "useDroppable": function() { return /* binding */ useDroppable; },
/* harmony export */   "useSensor": function() { return /* binding */ useSensor; },
/* harmony export */   "useSensors": function() { return /* binding */ useSensors; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");
/* harmony import */ var _dnd_kit_accessibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/accessibility */ "./node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js");





const screenReaderInstructions = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
};
const defaultAnnouncements = {
  onDragStart(id) {
    return `Picked up draggable item ${id}.`;
  },

  onDragOver(id, overId) {
    if (overId) {
      return `Draggable item ${id} was moved over droppable area ${overId}.`;
    }

    return `Draggable item ${id} is no longer over a droppable area.`;
  },

  onDragEnd(id, overId) {
    if (overId) {
      return `Draggable item ${id} was dropped over droppable area ${overId}`;
    }

    return `Draggable item ${id} was dropped.`;
  },

  onDragCancel(id) {
    return `Dragging was cancelled. Draggable item ${id} was dropped.`;
  }

};

var Action;

(function (Action) {
  Action["DragStart"] = "dragStart";
  Action["DragMove"] = "dragMove";
  Action["DragEnd"] = "dragEnd";
  Action["DragCancel"] = "dragCancel";
  Action["DragOver"] = "dragOver";
  Action["RegisterDroppable"] = "registerDroppable";
  Action["SetDroppableDisabled"] = "setDroppableDisabled";
  Action["UnregisterDroppable"] = "unregisterDroppable";
})(Action || (Action = {}));

function noop(..._args) {}

class DroppableContainersMap extends Map {
  get(id) {
    var _super$get;

    return id != null ? (_super$get = super.get(id)) != null ? _super$get : undefined : undefined;
  }

  toArray() {
    return Array.from(this.values());
  }

  getEnabled() {
    return this.toArray().filter(({
      disabled
    }) => !disabled);
  }

  getNodeFor(id) {
    var _this$get$node$curren, _this$get;

    return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : undefined;
  }

}

const Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  activeNodeClientRect: null,
  activators: [],
  ariaDescribedById: {
    draggable: ''
  },
  containerNodeRect: null,
  dispatch: noop,
  draggableNodes: {},
  droppableRects: /*#__PURE__*/new Map(),
  droppableContainers: /*#__PURE__*/new DroppableContainersMap(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: noop
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  recomputeLayouts: noop,
  windowRect: null,
  willRecomputeLayouts: false
});

function getInitialState() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: {},
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new DroppableContainersMap()
    }
  };
}
function reducer(state, action) {
  switch (action.type) {
    case Action.DragStart:
      return { ...state,
        draggable: { ...state.draggable,
          initialCoordinates: action.initialCoordinates,
          active: action.active
        }
      };

    case Action.DragMove:
      if (!state.draggable.active) {
        return state;
      }

      return { ...state,
        draggable: { ...state.draggable,
          translate: {
            x: action.coordinates.x - state.draggable.initialCoordinates.x,
            y: action.coordinates.y - state.draggable.initialCoordinates.y
          }
        }
      };

    case Action.DragEnd:
    case Action.DragCancel:
      return { ...state,
        draggable: { ...state.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };

    case Action.RegisterDroppable:
      {
        const {
          element
        } = action;
        const {
          id
        } = element;
        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.set(id, element);
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    case Action.SetDroppableDisabled:
      {
        const {
          id,
          key,
          disabled
        } = action;
        const element = state.droppable.containers.get(id);

        if (!element || key !== element.key) {
          return state;
        }

        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.set(id, { ...element,
          disabled
        });
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    case Action.UnregisterDroppable:
      {
        const {
          id,
          key
        } = action;
        const element = state.droppable.containers.get(id);

        if (!element || key !== element.key) {
          return state;
        }

        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.delete(id);
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    default:
      {
        return state;
      }
  }
}

const DndMonitorContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  type: null,
  event: null
});
function useDndMonitor({
  onDragStart,
  onDragMove,
  onDragOver,
  onDragEnd,
  onDragCancel
}) {
  const monitorState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DndMonitorContext);
  const previousMonitorState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(monitorState);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (monitorState !== previousMonitorState.current) {
      const {
        type,
        event
      } = monitorState;

      switch (type) {
        case Action.DragStart:
          onDragStart == null ? void 0 : onDragStart(event);
          break;

        case Action.DragMove:
          onDragMove == null ? void 0 : onDragMove(event);
          break;

        case Action.DragOver:
          onDragOver == null ? void 0 : onDragOver(event);
          break;

        case Action.DragCancel:
          onDragCancel == null ? void 0 : onDragCancel(event);
          break;

        case Action.DragEnd:
          onDragEnd == null ? void 0 : onDragEnd(event);
          break;
      }

      previousMonitorState.current = monitorState;
    }
  }, [monitorState, onDragStart, onDragMove, onDragOver, onDragEnd, onDragCancel]);
}

function Accessibility({
  announcements = defaultAnnouncements,
  hiddenTextDescribedById,
  screenReaderInstructions
}) {
  const {
    announce,
    announcement
  } = (0,_dnd_kit_accessibility__WEBPACK_IMPORTED_MODULE_3__.useAnnouncement)();
  const liveRegionId = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(`DndLiveRegion`);
  const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setMounted(true);
  }, []);
  useDndMonitor((0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    onDragStart({
      active
    }) {
      announce(announcements.onDragStart(active.id));
    },

    onDragMove({
      active,
      over
    }) {
      if (announcements.onDragMove) {
        announce(announcements.onDragMove(active.id, over == null ? void 0 : over.id));
      }
    },

    onDragOver({
      active,
      over
    }) {
      announce(announcements.onDragOver(active.id, over == null ? void 0 : over.id));
    },

    onDragEnd({
      active,
      over
    }) {
      announce(announcements.onDragEnd(active.id, over == null ? void 0 : over.id));
    },

    onDragCancel({
      active
    }) {
      announce(announcements.onDragCancel(active.id));
    }

  }), [announce, announcements]));
  return mounted ? (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_accessibility__WEBPACK_IMPORTED_MODULE_3__.HiddenText, {
    id: hiddenTextDescribedById,
    value: screenReaderInstructions.draggable
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_accessibility__WEBPACK_IMPORTED_MODULE_3__.LiveRegion, {
    id: liveRegionId,
    announcement: announcement
  })), document.body) : null;
}

const defaultCoordinates = /*#__PURE__*/Object.freeze({
  x: 0,
  y: 0
});

/**
 * Returns the distance between two points
 */
function distanceBetween(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function getRelativeTransformOrigin(event, rect) {
  if (event instanceof KeyboardEvent) {
    return '0 0';
  }

  const eventCoordinates = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getEventCoordinates)(event);
  const transformOrigin = {
    x: (eventCoordinates.x - rect.left) / rect.width * 100,
    y: (eventCoordinates.y - rect.top) / rect.height * 100
  };
  return `${transformOrigin.x}% ${transformOrigin.y}%`;
}

/**
 * Returns the coordinates of the center of a given ClientRect
 */

function centerOfRectangle(rect, left = rect.offsetLeft, top = rect.offsetTop) {
  return {
    x: left + rect.width * 0.5,
    y: top + rect.height * 0.5
  };
}
/**
 * Returns the closest rectangle from an array of rectangles to the center of a given
 * rectangle.
 */


const closestCenter = ({
  collisionRect,
  droppableContainers
}) => {
  const centerRect = centerOfRectangle(collisionRect, collisionRect.left, collisionRect.top);
  let minDistanceToCenter = Infinity;
  let minDroppableContainer = null;

  for (const droppableContainer of droppableContainers) {
    const {
      rect: {
        current: rect
      }
    } = droppableContainer;

    if (rect) {
      const distBetween = distanceBetween(centerOfRectangle(rect), centerRect);

      if (distBetween < minDistanceToCenter) {
        minDistanceToCenter = distBetween;
        minDroppableContainer = droppableContainer.id;
      }
    }
  }

  return minDroppableContainer;
};

function adjustScale(transform, rect1, rect2) {
  return { ...transform,
    scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
    scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
  };
}

function getRectDelta(rect1, rect2) {
  return rect1 && rect2 ? {
    x: rect1.left - rect2.left,
    y: rect1.top - rect2.top
  } : defaultCoordinates;
}

function createRectAdjustmentFn(modifier) {
  return function adjustViewRect(viewRect, ...adjustments) {
    return adjustments.reduce((acc, adjustment) => ({ ...acc,
      top: acc.top + modifier * adjustment.y,
      bottom: acc.bottom + modifier * adjustment.y,
      left: acc.left + modifier * adjustment.x,
      right: acc.right + modifier * adjustment.x,
      offsetLeft: acc.offsetLeft + modifier * adjustment.x,
      offsetTop: acc.offsetTop + modifier * adjustment.y
    }), { ...viewRect
    });
  };
}
const getAdjustedRect = /*#__PURE__*/createRectAdjustmentFn(1);

function isFixed(node, computedStyle = window.getComputedStyle(node)) {
  return computedStyle.position === 'fixed';
}

function isScrollable(node, computedStyle = window.getComputedStyle(node)) {
  const overflowRegex = /(auto|scroll|overlay)/;
  const properties = ['overflow', 'overflowX', 'overflowY'];
  return properties.find(property => {
    const value = computedStyle[property];
    return typeof value === 'string' ? overflowRegex.test(value) : false;
  }) != null;
}

function getScrollableAncestors(element) {
  const scrollParents = [];

  function findScrollableAncestors(node) {
    if (!node) {
      return scrollParents;
    }

    if (node instanceof Document && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
      scrollParents.push(node.scrollingElement);
      return scrollParents;
    }

    if (!(node instanceof HTMLElement) || node instanceof SVGElement) {
      return scrollParents;
    }

    if (scrollParents.includes(node)) {
      return scrollParents;
    }

    const computedStyle = window.getComputedStyle(node);

    if (isScrollable(node, computedStyle)) {
      scrollParents.push(node);
    }

    if (isFixed(node, computedStyle)) {
      return scrollParents;
    }

    return findScrollableAncestors(node.parentNode);
  }

  return element ? findScrollableAncestors(element.parentNode) : scrollParents;
}

function getScrollableElement(element) {
  if (!_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.canUseDOM) {
    return null;
  }

  if (element === document.scrollingElement || element instanceof Document) {
    return window;
  }

  if (element instanceof HTMLElement) {
    return element;
  }

  return null;
}

function getScrollCoordinates(element) {
  if (element instanceof Window) {
    return {
      x: element.scrollX,
      y: element.scrollY
    };
  }

  return {
    x: element.scrollLeft,
    y: element.scrollTop
  };
}

var Direction;

(function (Direction) {
  Direction[Direction["Forward"] = 1] = "Forward";
  Direction[Direction["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));

function getScrollPosition(scrollingContainer) {
  const minScroll = {
    x: 0,
    y: 0
  };
  const maxScroll = {
    x: scrollingContainer.scrollWidth - scrollingContainer.clientWidth,
    y: scrollingContainer.scrollHeight - scrollingContainer.clientHeight
  };
  const isTop = scrollingContainer.scrollTop <= minScroll.y;
  const isLeft = scrollingContainer.scrollLeft <= minScroll.x;
  const isBottom = scrollingContainer.scrollTop >= maxScroll.y;
  const isRight = scrollingContainer.scrollLeft >= maxScroll.x;
  return {
    isTop,
    isLeft,
    isBottom,
    isRight,
    maxScroll,
    minScroll
  };
}

function isDocumentScrollingElement(element) {
  if (!_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.canUseDOM || !element) {
    return false;
  }

  return element === document.scrollingElement;
}

const defaultThreshold = {
  x: 0.2,
  y: 0.2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, {
  top,
  left,
  right,
  bottom
}, acceleration = 10, thresholdPercentage = defaultThreshold) {
  const {
    clientHeight,
    clientWidth
  } = scrollContainer;
  const finalScrollContainerRect = isDocumentScrollingElement(scrollContainer) ? {
    top: 0,
    left: 0,
    right: clientWidth,
    bottom: clientHeight,
    width: clientWidth,
    height: clientHeight
  } : scrollContainerRect;
  const {
    isTop,
    isBottom,
    isLeft,
    isRight
  } = getScrollPosition(scrollContainer);
  const direction = {
    x: 0,
    y: 0
  };
  const speed = {
    x: 0,
    y: 0
  };
  const threshold = {
    height: finalScrollContainerRect.height * thresholdPercentage.y,
    width: finalScrollContainerRect.width * thresholdPercentage.x
  };

  if (!isTop && top <= finalScrollContainerRect.top + threshold.height) {
    // Scroll Up
    direction.y = Direction.Backward;
    speed.y = acceleration * Math.abs((finalScrollContainerRect.top + threshold.height - top) / threshold.height);
  } else if (!isBottom && bottom >= finalScrollContainerRect.bottom - threshold.height) {
    // Scroll Down
    direction.y = Direction.Forward;
    speed.y = acceleration * Math.abs((finalScrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
  }

  if (!isRight && right >= finalScrollContainerRect.right - threshold.width) {
    // Scroll Right
    direction.x = Direction.Forward;
    speed.x = acceleration * Math.abs((finalScrollContainerRect.right - threshold.width - right) / threshold.width);
  } else if (!isLeft && left <= finalScrollContainerRect.left + threshold.width) {
    // Scroll Left
    direction.x = Direction.Backward;
    speed.x = acceleration * Math.abs((finalScrollContainerRect.left + threshold.width - left) / threshold.width);
  }

  return {
    direction,
    speed
  };
}

function getScrollElementRect(element) {
  if (element === document.scrollingElement) {
    const {
      innerWidth,
      innerHeight
    } = window;
    return {
      top: 0,
      left: 0,
      right: innerWidth,
      bottom: innerHeight,
      width: innerWidth,
      height: innerHeight
    };
  }

  const {
    top,
    left,
    right,
    bottom
  } = element.getBoundingClientRect();
  return {
    top,
    left,
    right,
    bottom,
    width: element.clientWidth,
    height: element.clientHeight
  };
}

function getScrollOffsets(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(acc, getScrollCoordinates(node));
  }, defaultCoordinates);
}

function getEdgeOffset(node, parent, offset = defaultCoordinates) {
  if (!node || !(node instanceof HTMLElement)) {
    return offset;
  }

  const nodeOffset = {
    x: offset.x + node.offsetLeft,
    y: offset.y + node.offsetTop
  };

  if (node.offsetParent === parent) {
    return nodeOffset;
  }

  return getEdgeOffset(node.offsetParent, parent, nodeOffset);
}

function getLayoutRect(element) {
  const {
    offsetWidth: width,
    offsetHeight: height
  } = element;
  const {
    x: offsetLeft,
    y: offsetTop
  } = getEdgeOffset(element, null);
  return {
    width,
    height,
    offsetTop,
    offsetLeft
  };
}
function getViewportLayoutRect(element) {
  const {
    width,
    height,
    top,
    left
  } = element.getBoundingClientRect();
  const scrollableAncestors = getScrollableAncestors(element);
  const scrollOffsets = getScrollOffsets(scrollableAncestors);
  return {
    width,
    height,
    offsetTop: top + scrollOffsets.y,
    offsetLeft: left + scrollOffsets.x
  };
}
function getBoundingClientRect(element) {
  if (element instanceof Window) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      width,
      height,
      offsetTop: 0,
      offsetLeft: 0
    };
  }

  const {
    offsetTop,
    offsetLeft
  } = getLayoutRect(element);
  const {
    width,
    height,
    top,
    bottom,
    left,
    right
  } = element.getBoundingClientRect();
  return {
    width,
    height,
    top,
    bottom,
    right,
    left,
    offsetTop,
    offsetLeft
  };
}
function getViewRect(element) {
  const {
    width,
    height,
    offsetTop,
    offsetLeft
  } = getLayoutRect(element);
  const scrollableAncestors = getScrollableAncestors(element);
  const scrollOffsets = getScrollOffsets(scrollableAncestors);
  const top = offsetTop - scrollOffsets.y;
  const left = offsetLeft - scrollOffsets.x;
  return {
    width,
    height,
    top,
    bottom: top + height,
    right: left + width,
    left,
    offsetTop,
    offsetLeft
  };
}

function isViewRect(entry) {
  return 'top' in entry;
}

/**
 * Returns the coordinates of the corners of a given rectangle:
 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
 */

function cornersOfRectangle(rect, left = rect.offsetLeft, top = rect.offsetTop) {
  return [{
    x: left,
    y: top
  }, {
    x: left + rect.width,
    y: top
  }, {
    x: left,
    y: top + rect.height
  }, {
    x: left + rect.width,
    y: top + rect.height
  }];
}
/**
 * Returns the closest rectangle from an array of rectangles to the corners of
 * another rectangle.
 */


const closestCorners = ({
  collisionRect,
  droppableContainers
}) => {
  let minDistanceToCorners = Infinity;
  let minDistanceContainer = null;
  const corners = cornersOfRectangle(collisionRect, collisionRect.left, collisionRect.top);

  for (const droppableContainer of droppableContainers) {
    const {
      rect: {
        current: rect
      }
    } = droppableContainer;

    if (rect) {
      const rectCorners = cornersOfRectangle(rect, isViewRect(rect) ? rect.left : undefined, isViewRect(rect) ? rect.top : undefined);
      const distances = corners.reduce((accumulator, corner, index) => {
        return accumulator + distanceBetween(rectCorners[index], corner);
      }, 0);
      const effectiveDistance = Number((distances / 4).toFixed(4));

      if (effectiveDistance < minDistanceToCorners) {
        minDistanceToCorners = effectiveDistance;
        minDistanceContainer = droppableContainer.id;
      }
    }
  }

  return minDistanceContainer;
};

/**
 * Returns the intersecting rectangle area between two rectangles
 */
function getIntersectionRatio(entry, target) {
  const top = Math.max(target.top, entry.offsetTop);
  const left = Math.max(target.left, entry.offsetLeft);
  const right = Math.min(target.left + target.width, entry.offsetLeft + entry.width);
  const bottom = Math.min(target.top + target.height, entry.offsetTop + entry.height);
  const width = right - left;
  const height = bottom - top;

  if (left < right && top < bottom) {
    const targetArea = target.width * target.height;
    const entryArea = entry.width * entry.height;
    const intersectionArea = width * height;
    const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  } // Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)


  return 0;
}
/**
 * Returns the rectangle that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */


const rectIntersection = ({
  collisionRect,
  droppableContainers
}) => {
  let maxIntersectionRatio = 0;
  let maxIntersectingDroppableContainer = null;

  for (const droppableContainer of droppableContainers) {
    const {
      rect: {
        current: rect
      }
    } = droppableContainer;

    if (rect) {
      const intersectionRatio = getIntersectionRatio(rect, collisionRect);

      if (intersectionRatio > maxIntersectionRatio) {
        maxIntersectionRatio = intersectionRatio;
        maxIntersectingDroppableContainer = droppableContainer.id;
      }
    }
  }

  return maxIntersectingDroppableContainer;
};

function getOwnerDocument(target) {
  return target instanceof HTMLElement ? target.ownerDocument : document;
}

function getWindow(target) {
  var _getOwnerDocument$def;

  return (_getOwnerDocument$def = getOwnerDocument(target).defaultView) != null ? _getOwnerDocument$def : window;
}

var AutoScrollActivator;

(function (AutoScrollActivator) {
  AutoScrollActivator[AutoScrollActivator["Pointer"] = 0] = "Pointer";
  AutoScrollActivator[AutoScrollActivator["DraggableRect"] = 1] = "DraggableRect";
})(AutoScrollActivator || (AutoScrollActivator = {}));

var TraversalOrder;

(function (TraversalOrder) {
  TraversalOrder[TraversalOrder["TreeOrder"] = 0] = "TreeOrder";
  TraversalOrder[TraversalOrder["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
})(TraversalOrder || (TraversalOrder = {}));

function useAutoScroller({
  acceleration,
  activator = AutoScrollActivator.Pointer,
  canScroll,
  draggingRect,
  enabled,
  interval = 5,
  order = TraversalOrder.TreeOrder,
  pointerCoordinates,
  scrollableAncestors,
  scrollableAncestorRects,
  threshold
}) {
  const [setAutoScrollInterval, clearAutoScrollInterval] = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useInterval)();
  const scrollSpeed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: 1,
    y: 1
  });
  const rect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    switch (activator) {
      case AutoScrollActivator.Pointer:
        return pointerCoordinates ? {
          top: pointerCoordinates.y,
          bottom: pointerCoordinates.y,
          left: pointerCoordinates.x,
          right: pointerCoordinates.x
        } : null;

      case AutoScrollActivator.DraggableRect:
        return draggingRect;
    }

    return null;
  }, [activator, draggingRect, pointerCoordinates]);
  const scrollDirection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(defaultCoordinates);
  const scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const autoScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }

    const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
    const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
    scrollContainer.scrollBy(scrollLeft, scrollTop);
  }, []);
  const sortedScrollableAncestors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => order === TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!enabled || !scrollableAncestors.length || !rect) {
      clearAutoScrollInterval();
      return;
    }

    for (const scrollContainer of sortedScrollableAncestors) {
      if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) {
        continue;
      }

      const index = scrollableAncestors.indexOf(scrollContainer);
      const scrolllContainerRect = scrollableAncestorRects[index];

      if (!scrolllContainerRect) {
        continue;
      }

      const {
        direction,
        speed
      } = getScrollDirectionAndSpeed(scrollContainer, scrolllContainerRect, rect, acceleration, threshold);

      if (speed.x > 0 || speed.y > 0) {
        clearAutoScrollInterval();
        scrollContainerRef.current = scrollContainer;
        setAutoScrollInterval(autoScroll, interval);
        scrollSpeed.current = speed;
        scrollDirection.current = direction;
        return;
      }
    }

    scrollSpeed.current = {
      x: 0,
      y: 0
    };
    scrollDirection.current = {
      x: 0,
      y: 0
    };
    clearAutoScrollInterval();
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [acceleration, autoScroll, canScroll, clearAutoScrollInterval, enabled, interval, // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(rect), setAutoScrollInterval, scrollableAncestors, sortedScrollableAncestors, scrollableAncestorRects, // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(threshold)]);
}

function useCachedNode(draggableNodes, id) {
  const draggableNode = id !== null ? draggableNodes[id] : undefined;
  const node = draggableNode ? draggableNode.node.current : null;
  return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(cachedNode => {
    var _ref;

    if (id === null) {
      return null;
    } // In some cases, the draggable node can unmount while dragging
    // This is the case for virtualized lists. In those situations,
    // we fall back to the last known value for that node.


    return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
  }, [node, id]);
}

function useCombineActivators(sensors, getSyntheticHandler) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => sensors.reduce((accumulator, sensor) => {
    const {
      sensor: Sensor
    } = sensor;
    const sensorActivators = Sensor.activators.map(activator => ({
      eventName: activator.eventName,
      handler: getSyntheticHandler(activator.handler, sensor)
    }));
    return [...accumulator, ...sensorActivators];
  }, []), [sensors, getSyntheticHandler]);
}

function useData(data) {
  const dataRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(data);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (dataRef.current !== data) {
      dataRef.current = data;
    }
  }, [data]);
  return dataRef;
}

var MeasuringStrategy;

(function (MeasuringStrategy) {
  MeasuringStrategy[MeasuringStrategy["Always"] = 0] = "Always";
  MeasuringStrategy[MeasuringStrategy["BeforeDragging"] = 1] = "BeforeDragging";
  MeasuringStrategy[MeasuringStrategy["WhileDragging"] = 2] = "WhileDragging";
})(MeasuringStrategy || (MeasuringStrategy = {}));

var MeasuringFrequency;

(function (MeasuringFrequency) {
  MeasuringFrequency["Optimized"] = "optimized";
})(MeasuringFrequency || (MeasuringFrequency = {}));

const defaultValue = /*#__PURE__*/new Map();
const defaultConfig = {
  measure: getLayoutRect,
  strategy: MeasuringStrategy.WhileDragging,
  frequency: MeasuringFrequency.Optimized
};
function useDroppableMeasuring(containers, {
  dragging,
  dependencies,
  config
}) {
  const [willRecomputeLayouts, setWillRecomputeLayouts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    frequency,
    measure,
    strategy
  } = { ...defaultConfig,
    ...config
  };
  const containersRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(containers);
  const recomputeLayouts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setWillRecomputeLayouts(true), []);
  const recomputeLayoutsTimeoutId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const disabled = isDisabled();
  const layoutRectMap = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(previousValue => {
    if (disabled && !dragging) {
      return defaultValue;
    }

    if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || willRecomputeLayouts) {
      for (let container of containers) {
        if (!container) {
          continue;
        }

        container.rect.current = container.node.current ? measure(container.node.current) : null;
      }

      return createLayoutRectMap(containers);
    }

    return previousValue;
  }, [containers, dragging, disabled, measure, willRecomputeLayouts]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    containersRef.current = containers;
  }, [containers]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (willRecomputeLayouts) {
      setWillRecomputeLayouts(false);
    }
  }, [willRecomputeLayouts]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function recompute() {
    if (disabled) {
      return;
    }

    requestAnimationFrame(recomputeLayouts);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [dragging, disabled]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function forceRecomputeLayouts() {
    if (disabled || typeof frequency !== 'number' || recomputeLayoutsTimeoutId.current !== null) {
      return;
    }

    recomputeLayoutsTimeoutId.current = setTimeout(() => {
      recomputeLayouts();
      recomputeLayoutsTimeoutId.current = null;
    }, frequency);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [frequency, disabled, recomputeLayouts, ...dependencies]);
  return {
    layoutRectMap,
    recomputeLayouts,
    willRecomputeLayouts
  };

  function isDisabled() {
    switch (strategy) {
      case MeasuringStrategy.Always:
        return false;

      case MeasuringStrategy.BeforeDragging:
        return dragging;

      default:
        return !dragging;
    }
  }
}

function createLayoutRectMap(containers) {
  const layoutRectMap = new Map();

  if (containers) {
    for (const container of containers) {
      if (!container) {
        continue;
      }

      const {
        id,
        rect
      } = container;

      if (rect.current == null) {
        continue;
      }

      layoutRectMap.set(id, rect.current);
    }
  }

  return layoutRectMap;
}

function useScrollOffsets(elements) {
  const [scrollCoordinates, setScrollCoordinates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const prevElements = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(elements); // To-do: Throttle the handleScroll callback

  const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    const scrollingElement = getScrollableElement(event.target);

    if (!scrollingElement) {
      return;
    }

    setScrollCoordinates(scrollCoordinates => {
      if (!scrollCoordinates) {
        return null;
      }

      scrollCoordinates.set(scrollingElement, getScrollCoordinates(scrollingElement));
      return new Map(scrollCoordinates);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const previousElements = prevElements.current;

    if (elements !== previousElements) {
      cleanup(previousElements);
      const entries = elements.map(element => {
        const scrollableElement = getScrollableElement(element);

        if (scrollableElement) {
          scrollableElement.addEventListener('scroll', handleScroll, {
            passive: true
          });
          return [scrollableElement, getScrollCoordinates(scrollableElement)];
        }

        return null;
      }).filter(entry => entry != null);
      setScrollCoordinates(entries.length ? new Map(entries) : null);
      prevElements.current = elements;
    }

    return () => {
      cleanup(elements);
      cleanup(previousElements);
    };

    function cleanup(elements) {
      elements.forEach(element => {
        const scrollableElement = getScrollableElement(element);
        scrollableElement == null ? void 0 : scrollableElement.removeEventListener('scroll', handleScroll);
      });
    }
  }, [handleScroll, elements]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (elements.length) {
      return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
    }

    return defaultCoordinates;
  }, [elements, scrollCoordinates]);
}

const defaultValue$1 = [];
function useScrollableAncestors(node) {
  const previousNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(node);
  const ancestors = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(previousValue => {
    if (!node) {
      return defaultValue$1;
    }

    if (previousValue && node && previousNode.current && node.parentNode === previousNode.current.parentNode) {
      return previousValue;
    }

    return getScrollableAncestors(node);
  }, [node]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    previousNode.current = node;
  }, [node]);
  return ancestors;
}

function useSensorSetup(sensors) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.canUseDOM) {
      return;
    }

    const teardownFns = sensors.map(({
      sensor
    }) => sensor.setup == null ? void 0 : sensor.setup());
    return () => {
      for (const teardown of teardownFns) {
        teardown == null ? void 0 : teardown();
      }
    };
  }, // TO-DO: Sensors lenght could theoretically change which would not be a valid dependency
  // eslint-disable-next-line react-hooks/exhaustive-deps
  sensors.map(({
    sensor
  }) => sensor));
}

function useSyntheticListeners(listeners, id) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return listeners.reduce((acc, {
      eventName,
      handler
    }) => {
      acc[eventName] = event => {
        handler(event, id);
      };

      return acc;
    }, {});
  }, [listeners, id]);
}

const useClientRect = /*#__PURE__*/createUseRectFn(getBoundingClientRect);
const useClientRects = /*#__PURE__*/createUseRectsFn(getBoundingClientRect);
function useRect(element, getRect, forceRecompute) {
  const previousElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(element);
  return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(previousValue => {
    if (!element) {
      return null;
    }

    if (forceRecompute || !previousValue && element || element !== previousElement.current) {
      if (element instanceof HTMLElement && element.parentNode == null) {
        return null;
      }

      return getRect(element);
    }

    return previousValue != null ? previousValue : null;
  }, [element, forceRecompute, getRect]);
}
function createUseRectFn(getRect) {
  return (element, forceRecompute) => useRect(element, getRect, forceRecompute);
}

function createUseRectsFn(getRect) {
  const defaultValue = [];
  return function useRects(elements, forceRecompute) {
    const previousElements = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(elements);
    return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(previousValue => {
      if (!elements.length) {
        return defaultValue;
      }

      if (forceRecompute || !previousValue && elements.length || elements !== previousElements.current) {
        return elements.map(element => getRect(element));
      }

      return previousValue != null ? previousValue : defaultValue;
    }, [elements, forceRecompute]);
  };
}

function getMeasurableNode(node) {
  if (!node) {
    return null;
  }

  if (node.children.length > 1) {
    return node;
  }

  const firstChild = node.children[0];
  return firstChild instanceof HTMLElement ? firstChild : node;
}

function getDragOverlayRect(element) {
  const {
    width,
    height,
    offsetLeft,
    offsetTop
  } = getLayoutRect(element);
  return {
    top: offsetTop,
    bottom: offsetTop + height,
    left: offsetLeft,
    right: offsetLeft + width,
    width,
    height,
    offsetTop,
    offsetLeft
  };
}

const useDragOverlayRect = /*#__PURE__*/createUseRectFn(getDragOverlayRect);
function useDragOverlayMeasuring({
  disabled,
  forceRecompute
}) {
  const [nodeRef, setRef] = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useNodeRef)();
  const rect = useDragOverlayRect(disabled ? null : getMeasurableNode(nodeRef.current), forceRecompute);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    nodeRef,
    rect,
    setRef
  }), [rect, nodeRef, setRef]);
}

function useSensor(sensor, options) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    sensor,
    options: options != null ? options : {}
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [sensor, options]);
}

function useSensors(...sensors) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [...sensors].filter(sensor => sensor != null), // eslint-disable-next-line react-hooks/exhaustive-deps
  [...sensors]);
}

class Listeners {
  constructor(target) {
    this.target = target;
    this.listeners = [];

    this.removeAll = () => {
      this.listeners.forEach(listener => {
        var _this$target;

        return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
      });
    };
  }

  add(eventName, handler, options) {
    var _this$target2;

    (_this$target2 = this.target) == null ? void 0 : _this$target2.addEventListener(eventName, handler, options);
    this.listeners.push([eventName, handler, options]);
  }

}

function getEventListenerTarget(element) {
  // If the `event.target` element is removed from the document events will still be targeted
  // at it, and hence won't always bubble up to the window or document anymore.
  // If there is any risk of an element being removed while it is being dragged,
  // the best practice is to attach the event listeners directly to the target.
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
  return element instanceof EventTarget ? element : getOwnerDocument(element);
}

function hasExceededDistance(delta, measurement) {
  const dx = Math.abs(delta.x);
  const dy = Math.abs(delta.y);

  if (typeof measurement === 'number') {
    return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
  }

  if ('x' in measurement && 'y' in measurement) {
    return dx > measurement.x && dy > measurement.y;
  }

  if ('x' in measurement) {
    return dx > measurement.x;
  }

  if ('y' in measurement) {
    return dy > measurement.y;
  }

  return false;
}

var EventName;

(function (EventName) {
  EventName["Click"] = "click";
  EventName["Keydown"] = "keydown";
  EventName["ContextMenu"] = "contextmenu";
  EventName["Resize"] = "resize";
  EventName["SelectionChange"] = "selectionchange";
  EventName["VisibilityChange"] = "visibilitychange";
})(EventName || (EventName = {}));

function preventDefault(event) {
  event.preventDefault();
}
function stopPropagation(event) {
  event.stopPropagation();
}

var KeyboardCode;

(function (KeyboardCode) {
  KeyboardCode["Space"] = "Space";
  KeyboardCode["Down"] = "ArrowDown";
  KeyboardCode["Right"] = "ArrowRight";
  KeyboardCode["Left"] = "ArrowLeft";
  KeyboardCode["Up"] = "ArrowUp";
  KeyboardCode["Esc"] = "Escape";
  KeyboardCode["Enter"] = "Enter";
})(KeyboardCode || (KeyboardCode = {}));

const defaultKeyboardCodes = {
  start: [KeyboardCode.Space, KeyboardCode.Enter],
  cancel: [KeyboardCode.Esc],
  end: [KeyboardCode.Space, KeyboardCode.Enter]
};
const defaultKeyboardCoordinateGetter = (event, {
  currentCoordinates
}) => {
  switch (event.code) {
    case KeyboardCode.Right:
      return { ...currentCoordinates,
        x: currentCoordinates.x + 25
      };

    case KeyboardCode.Left:
      return { ...currentCoordinates,
        x: currentCoordinates.x - 25
      };

    case KeyboardCode.Down:
      return { ...currentCoordinates,
        y: currentCoordinates.y + 25
      };

    case KeyboardCode.Up:
      return { ...currentCoordinates,
        y: currentCoordinates.y - 25
      };
  }

  return undefined;
};

class KeyboardSensor {
  constructor(props) {
    this.props = props;
    this.autoScrollEnabled = false;
    this.coordinates = defaultCoordinates;
    const {
      event: {
        target
      }
    } = props;
    this.props = props;
    this.listeners = new Listeners(getOwnerDocument(target));
    this.windowListeners = new Listeners(getWindow(target));
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.attach();
  }

  attach() {
    this.handleStart();
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
  }

  handleStart() {
    const {
      activeNode,
      onStart
    } = this.props;

    if (!activeNode.node.current) {
      throw new Error('Active draggable node is undefined');
    }

    const activeNodeRect = getBoundingClientRect(activeNode.node.current);
    const coordinates = {
      x: activeNodeRect.left,
      y: activeNodeRect.top
    };
    this.coordinates = coordinates;
    onStart(coordinates);
  }

  handleKeyDown(event) {
    if (event instanceof KeyboardEvent) {
      const {
        coordinates
      } = this;
      const {
        active,
        context,
        options
      } = this.props;
      const {
        keyboardCodes = defaultKeyboardCodes,
        coordinateGetter = defaultKeyboardCoordinateGetter,
        scrollBehavior = 'smooth'
      } = options;
      const {
        code
      } = event;

      if (keyboardCodes.end.includes(code)) {
        this.handleEnd(event);
        return;
      }

      if (keyboardCodes.cancel.includes(code)) {
        this.handleCancel(event);
        return;
      }

      const newCoordinates = coordinateGetter(event, {
        active,
        context: context.current,
        currentCoordinates: coordinates
      });

      if (newCoordinates) {
        const scrollDelta = {
          x: 0,
          y: 0
        };
        const {
          scrollableAncestors
        } = context.current;

        for (const scrollContainer of scrollableAncestors) {
          const direction = event.code;
          const coordinatesDelta = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.subtract)(newCoordinates, coordinates);
          const {
            isTop,
            isRight,
            isLeft,
            isBottom,
            maxScroll,
            minScroll
          } = getScrollPosition(scrollContainer);
          const scrollElementRect = getScrollElementRect(scrollContainer);
          const clampedCoordinates = {
            x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
            y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
          };
          const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
          const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;

          if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
            const canFullyScrollToNewCoordinates = direction === KeyboardCode.Right && scrollContainer.scrollLeft + coordinatesDelta.x <= maxScroll.x || direction === KeyboardCode.Left && scrollContainer.scrollLeft + coordinatesDelta.x >= minScroll.x;

            if (canFullyScrollToNewCoordinates) {
              // We don't need to update coordinates, the scroll adjustment alone will trigger
              // logic to auto-detect the new container we are over
              scrollContainer.scrollBy({
                left: coordinatesDelta.x,
                behavior: scrollBehavior
              });
              return;
            }

            scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
            scrollContainer.scrollBy({
              left: -scrollDelta.x,
              behavior: scrollBehavior
            });
            break;
          } else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
            const canFullyScrollToNewCoordinates = direction === KeyboardCode.Down && scrollContainer.scrollTop + coordinatesDelta.y <= maxScroll.y || direction === KeyboardCode.Up && scrollContainer.scrollTop + coordinatesDelta.y >= minScroll.y;

            if (canFullyScrollToNewCoordinates) {
              // We don't need to update coordinates, the scroll adjustment alone will trigger
              // logic to auto-detect the new container we are over
              scrollContainer.scrollBy({
                top: coordinatesDelta.y,
                behavior: scrollBehavior
              });
              return;
            }

            scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
            scrollContainer.scrollBy({
              top: -scrollDelta.y,
              behavior: scrollBehavior
            });
            break;
          }
        }

        this.handleMove(event, (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(newCoordinates, scrollDelta));
      }
    }
  }

  handleMove(event, coordinates) {
    const {
      onMove
    } = this.props;
    event.preventDefault();
    onMove(coordinates);
    this.coordinates = coordinates;
  }

  handleEnd(event) {
    const {
      onEnd
    } = this.props;
    event.preventDefault();
    this.detach();
    onEnd();
  }

  handleCancel(event) {
    const {
      onCancel
    } = this.props;
    event.preventDefault();
    this.detach();
    onCancel();
  }

  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
  }

}
KeyboardSensor.activators = [{
  eventName: 'onKeyDown',
  handler: (event, {
    keyboardCodes = defaultKeyboardCodes,
    onActivation
  }) => {
    const {
      code
    } = event.nativeEvent;

    if (keyboardCodes.start.includes(code)) {
      event.preventDefault();
      onActivation == null ? void 0 : onActivation({
        event: event.nativeEvent
      });
      return true;
    }

    return false;
  }
}];

function isDistanceConstraint(constraint) {
  return Boolean(constraint && 'distance' in constraint);
}

function isDelayConstraint(constraint) {
  return Boolean(constraint && 'delay' in constraint);
}

class AbstractPointerSensor {
  constructor(props, events, listenerTarget = getEventListenerTarget(props.event.target)) {
    this.props = props;
    this.events = events;
    this.autoScrollEnabled = true;
    this.activated = false;
    this.timeoutId = null;
    const {
      event
    } = props;
    const {
      target
    } = event;
    this.props = props;
    this.events = events;
    this.document = getOwnerDocument(target);
    this.documentListeners = new Listeners(this.document);
    this.listeners = new Listeners(listenerTarget);
    this.windowListeners = new Listeners(getWindow(target));
    this.initialCoordinates = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getEventCoordinates)(event);
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.removeTextSelection = this.removeTextSelection.bind(this);
    this.attach();
  }

  attach() {
    const {
      events,
      props: {
        options: {
          activationConstraint
        }
      }
    } = this;
    this.listeners.add(events.move.name, this.handleMove, {
      passive: false
    });
    this.listeners.add(events.end.name, this.handleEnd);
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    this.windowListeners.add(EventName.ContextMenu, preventDefault);
    this.documentListeners.add(EventName.Keydown, this.handleKeydown);

    if (activationConstraint) {
      if (isDistanceConstraint(activationConstraint)) {
        return;
      }

      if (isDelayConstraint(activationConstraint)) {
        this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
        return;
      }
    }

    this.handleStart();
  }

  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll(); // Wait until the next event loop before removing document listeners
    // This is necessary because we listen for `click` and `selection` events on the document

    setTimeout(this.documentListeners.removeAll, 50);

    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  handleStart() {
    const {
      initialCoordinates
    } = this;
    const {
      onStart
    } = this.props;

    if (initialCoordinates) {
      this.activated = true; // Stop propagation of click events once activation constraints are met

      this.documentListeners.add(EventName.Click, stopPropagation, {
        capture: true
      }); // Remove any text selection from the document

      this.removeTextSelection(); // Prevent further text selection while dragging

      this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
      onStart(initialCoordinates);
    }
  }

  handleMove(event) {
    const {
      activated,
      initialCoordinates,
      props
    } = this;
    const {
      onMove,
      options: {
        activationConstraint
      }
    } = props;

    if (!initialCoordinates) {
      return;
    }

    const coordinates = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getEventCoordinates)(event);
    const delta = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.subtract)(initialCoordinates, coordinates);

    if (!activated && activationConstraint) {
      // Constraint validation
      if (isDelayConstraint(activationConstraint)) {
        if (hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }

        return;
      }

      if (isDistanceConstraint(activationConstraint)) {
        if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }

        if (hasExceededDistance(delta, activationConstraint.distance)) {
          return this.handleStart();
        }

        return;
      }
    }

    if (event.cancelable) {
      event.preventDefault();
    }

    onMove(coordinates);
  }

  handleEnd() {
    const {
      onEnd
    } = this.props;
    this.detach();
    onEnd();
  }

  handleCancel() {
    const {
      onCancel
    } = this.props;
    this.detach();
    onCancel();
  }

  handleKeydown(event) {
    if (event.code === KeyboardCode.Esc) {
      this.handleCancel();
    }
  }

  removeTextSelection() {
    var _this$document$getSel;

    (_this$document$getSel = this.document.getSelection()) == null ? void 0 : _this$document$getSel.removeAllRanges();
  }

}

const events = {
  move: {
    name: 'pointermove'
  },
  end: {
    name: 'pointerup'
  }
};
class PointerSensor extends AbstractPointerSensor {
  constructor(props) {
    const {
      event
    } = props; // Pointer events stop firing if the target is unmounted while dragging
    // Therefore we attach listeners to the owner document instead

    const listenerTarget = getOwnerDocument(event.target);
    super(props, events, listenerTarget);
  }

}
PointerSensor.activators = [{
  eventName: 'onPointerDown',
  handler: ({
    nativeEvent: event
  }, {
    onActivation
  }) => {
    if (!event.isPrimary || event.button !== 0) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

const events$1 = {
  move: {
    name: 'mousemove'
  },
  end: {
    name: 'mouseup'
  }
};
var MouseButton;

(function (MouseButton) {
  MouseButton[MouseButton["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));

class MouseSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$1, getOwnerDocument(props.event.target));
  }

}
MouseSensor.activators = [{
  eventName: 'onMouseDown',
  handler: ({
    nativeEvent: event
  }, {
    onActivation
  }) => {
    if (event.button === MouseButton.RightClick) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

const events$2 = {
  move: {
    name: 'touchmove'
  },
  end: {
    name: 'touchend'
  }
};
class TouchSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$2);
  }

  static setup() {
    // Adding a non-capture and non-passive `touchmove` listener in order
    // to force `event.preventDefault()` calls to work in dynamically added
    // touchmove event handlers. This is required for iOS Safari.
    window.addEventListener(events$2.move.name, noop, {
      capture: false,
      passive: false
    });
    return function teardown() {
      window.removeEventListener(events$2.move.name, noop);
    }; // We create a new handler because the teardown function of another sensor
    // could remove our event listener if we use a referentially equal listener.

    function noop() {}
  }

}
TouchSensor.activators = [{
  eventName: 'onTouchStart',
  handler: ({
    nativeEvent: event
  }, {
    onActivation
  }) => {
    const {
      touches
    } = event;

    if (touches.length > 1) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

function applyModifiers(modifiers, {
  transform,
  ...args
}) {
  return (modifiers == null ? void 0 : modifiers.length) ? modifiers.reduce((accumulator, modifier) => {
    return modifier({
      transform: accumulator,
      ...args
    });
  }, transform) : transform;
}

const defaultSensors = [{
  sensor: PointerSensor,
  options: {}
}, {
  sensor: KeyboardSensor,
  options: {}
}];
const defaultData = {
  current: {}
};
const ActiveDraggableContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({ ...defaultCoordinates,
  scaleX: 1,
  scaleY: 1
});
const DndContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function DndContext({
  id,
  autoScroll = true,
  announcements,
  children,
  sensors = defaultSensors,
  collisionDetection = rectIntersection,
  measuring,
  modifiers,
  screenReaderInstructions: screenReaderInstructions$1 = screenReaderInstructions,
  ...props
}) {
  var _measuring$draggable$, _measuring$draggable, _sensorContext$curren, _dragOverlay$rect, _over$rect;

  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, undefined, getInitialState);
  const [state, dispatch] = store;
  const [monitorState, setMonitorState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => ({
    type: null,
    event: null
  }));
  const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    draggable: {
      active: activeId,
      nodes: draggableNodes,
      translate
    },
    droppable: {
      containers: droppableContainers
    }
  } = state;
  const node = activeId ? draggableNodes[activeId] : null;
  const activeRects = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    initial: null,
    translated: null
  });
  const active = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _node$data;

    return activeId != null ? {
      id: activeId,
      // It's possible for the active node to unmount while dragging
      data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
      rect: activeRects
    } : null;
  }, [activeId, node]);
  const activeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [activeSensor, setActiveSensor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [activatorEvent, setActivatorEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const latestProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props);
  const draggableDescribedById = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(`DndDescribedBy`, id);
  const enabledDroppableContainers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return droppableContainers.getEnabled();
  }, [droppableContainers]);
  const {
    layoutRectMap: droppableRects,
    recomputeLayouts,
    willRecomputeLayouts
  } = useDroppableMeasuring(enabledDroppableContainers, {
    dragging: isDragging,
    dependencies: [translate.x, translate.y],
    config: measuring == null ? void 0 : measuring.droppable
  });
  const activeNode = useCachedNode(draggableNodes, activeId);
  const activationCoordinates = activatorEvent ? (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getEventCoordinates)(activatorEvent) : null;
  const activeNodeRect = useRect(activeNode, (_measuring$draggable$ = measuring == null ? void 0 : (_measuring$draggable = measuring.draggable) == null ? void 0 : _measuring$draggable.measure) != null ? _measuring$draggable$ : getViewRect);
  const activeNodeClientRect = useClientRect(activeNode);
  const initialActiveNodeRectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const initialActiveNodeRect = initialActiveNodeRectRef.current;
  const sensorContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    active: null,
    activeNode,
    collisionRect: null,
    droppableRects,
    draggableNodes,
    draggingNodeRect: null,
    droppableContainers,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null,
    translatedRect: null
  });
  const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
  const windowRect = useClientRect(activeNode ? activeNode.ownerDocument.defaultView : null);
  const containerNodeRect = useClientRect(activeNode ? activeNode.parentElement : null);
  const scrollableAncestors = useScrollableAncestors(activeId ? overNode != null ? overNode : activeNode : null);
  const scrollableAncestorRects = useClientRects(scrollableAncestors);
  const dragOverlay = useDragOverlayMeasuring({
    disabled: activeId == null,
    forceRecompute: willRecomputeLayouts
  }); // Use the rect of the drag overlay if it is mounted

  const draggingNodeRect = (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect; // The delta between the previous and new position of the draggable node
  // is only relevant when there is no drag overlay

  const nodeRectDelta = draggingNodeRect === activeNodeRect ? getRectDelta(activeNodeRect, initialActiveNodeRect) : defaultCoordinates;
  const modifiedTranslate = applyModifiers(modifiers, {
    transform: {
      x: translate.x - nodeRectDelta.x,
      y: translate.y - nodeRectDelta.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent,
    active,
    activeNodeRect: activeNodeClientRect,
    containerNodeRect,
    draggingNodeRect,
    over: sensorContext.current.over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  });
  const pointerCoordinates = activationCoordinates ? (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(activationCoordinates, translate) : null;
  const scrollAdjustment = useScrollOffsets(scrollableAncestors);
  const scrollAdjustedTranslate = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(modifiedTranslate, scrollAdjustment);
  const translatedRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
  const collisionRect = translatedRect ? getAdjustedRect(translatedRect, scrollAdjustment) : null;
  const overId = active && collisionRect ? collisionDetection({
    active,
    collisionRect,
    droppableContainers: enabledDroppableContainers
  }) : null;
  const [over, setOver] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const transform = adjustScale(modifiedTranslate, (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
  const instantiateSensor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event, {
    sensor: Sensor,
    options
  }) => {
    if (!activeRef.current) {
      return;
    }

    const activeNode = draggableNodes[activeRef.current];

    if (!activeNode) {
      return;
    }

    const sensorInstance = new Sensor({
      active: activeRef.current,
      activeNode,
      event: event.nativeEvent,
      options,
      // Sensors need to be instantiated with refs for arguments that change over time
      // otherwise they are frozen in time with the stale arguments
      context: sensorContext,

      onStart(initialCoordinates) {
        const id = activeRef.current;

        if (!id) {
          return;
        }

        const node = draggableNodes[id];

        if (!node) {
          return;
        }

        const {
          onDragStart
        } = latestProps.current;
        const event = {
          active: {
            id,
            data: node.data,
            rect: activeRects
          }
        };
        (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(() => {
          dispatch({
            type: Action.DragStart,
            initialCoordinates,
            active: id
          });
          setMonitorState({
            type: Action.DragStart,
            event
          });
        });
        onDragStart == null ? void 0 : onDragStart(event);
      },

      onMove(coordinates) {
        dispatch({
          type: Action.DragMove,
          coordinates
        });
      },

      onEnd: createHandler(Action.DragEnd),
      onCancel: createHandler(Action.DragCancel)
    });
    (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(() => {
      setActiveSensor(sensorInstance);
      setActivatorEvent(event.nativeEvent);
    });

    function createHandler(type) {
      return async function handler() {
        const {
          active,
          over,
          scrollAdjustedTranslate
        } = sensorContext.current;
        let event = null;

        if (active && scrollAdjustedTranslate) {
          const {
            cancelDrop
          } = latestProps.current;
          event = {
            active: active,
            delta: scrollAdjustedTranslate,
            over
          };

          if (type === Action.DragEnd && typeof cancelDrop === 'function') {
            const shouldCancel = await Promise.resolve(cancelDrop(event));

            if (shouldCancel) {
              type = Action.DragCancel;
            }
          }
        }

        activeRef.current = null;
        (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(() => {
          dispatch({
            type
          });
          setOver(null);
          setIsDragging(false);
          setActiveSensor(null);
          setActivatorEvent(null);

          if (event) {
            setMonitorState({
              type,
              event
            });
          }
        });

        if (event) {
          const {
            onDragCancel,
            onDragEnd
          } = latestProps.current;
          const handler = type === Action.DragEnd ? onDragEnd : onDragCancel;
          handler == null ? void 0 : handler(event);
        }
      };
    }
  }, [dispatch, draggableNodes]);
  const bindActivatorToSensorInstantiator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((handler, sensor) => {
    return (event, active) => {
      const nativeEvent = event.nativeEvent;

      if ( // No active draggable
      activeRef.current !== null || // Event has already been captured
      nativeEvent.dndKit || nativeEvent.defaultPrevented) {
        return;
      }

      if (handler(event, sensor.options) === true) {
        nativeEvent.dndKit = {
          capturedBy: sensor.sensor
        };
        activeRef.current = active;
        instantiateSensor(event, sensor);
      }
    };
  }, [instantiateSensor]);
  const activators = useCombineActivators(sensors, bindActivatorToSensorInstantiator);
  useSensorSetup(sensors);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    latestProps.current = props;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  Object.values(props));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (activeId != null) {
      setIsDragging(true);
    }
  }, [activeId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!active) {
      initialActiveNodeRectRef.current = null;
    }

    if (active && activeNodeRect && !initialActiveNodeRectRef.current) {
      initialActiveNodeRectRef.current = activeNodeRect;
    }
  }, [activeNodeRect, active]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      onDragMove
    } = latestProps.current;
    const {
      active,
      over
    } = sensorContext.current;

    if (!active) {
      return;
    }

    const event = {
      active,
      delta: {
        x: scrollAdjustedTranslate.x,
        y: scrollAdjustedTranslate.y
      },
      over
    };
    setMonitorState({
      type: Action.DragMove,
      event
    });
    onDragMove == null ? void 0 : onDragMove(event);
  }, [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      active,
      droppableContainers,
      scrollAdjustedTranslate
    } = sensorContext.current;

    if (!active || !activeRef.current || !scrollAdjustedTranslate) {
      return;
    }

    const {
      onDragOver
    } = latestProps.current;
    const overContainer = droppableContainers.get(overId);
    const over = overContainer && overContainer.rect.current ? {
      id: overContainer.id,
      rect: overContainer.rect.current,
      data: overContainer.data,
      disabled: overContainer.disabled
    } : null;
    const event = {
      active,
      delta: {
        x: scrollAdjustedTranslate.x,
        y: scrollAdjustedTranslate.y
      },
      over
    };
    (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(() => {
      setOver(over);
      setMonitorState({
        type: Action.DragOver,
        event
      });
      onDragOver == null ? void 0 : onDragOver(event);
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [overId]);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    sensorContext.current = {
      active,
      activeNode,
      collisionRect,
      droppableRects,
      draggableNodes,
      draggingNodeRect,
      droppableContainers,
      over,
      scrollableAncestors,
      scrollAdjustedTranslate: scrollAdjustedTranslate,
      translatedRect
    };
    activeRects.current = {
      initial: draggingNodeRect,
      translated: translatedRect
    };
  }, [active, activeNode, collisionRect, draggableNodes, draggingNodeRect, droppableRects, droppableContainers, over, scrollableAncestors, scrollAdjustedTranslate, translatedRect]);
  useAutoScroller({ ...getAutoScrollerOptions(),
    draggingRect: translatedRect,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects
  });
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const memoizedContext = {
      active,
      activeNode,
      activeNodeRect,
      activeNodeClientRect,
      activatorEvent,
      activators,
      ariaDescribedById: {
        draggable: draggableDescribedById
      },
      containerNodeRect,
      dispatch,
      dragOverlay,
      draggableNodes,
      droppableContainers,
      droppableRects,
      over,
      recomputeLayouts,
      scrollableAncestors,
      scrollableAncestorRects,
      willRecomputeLayouts,
      windowRect
    };
    return memoizedContext;
  }, [active, activeNode, activeNodeClientRect, activeNodeRect, activatorEvent, activators, containerNodeRect, dragOverlay, dispatch, draggableNodes, draggableDescribedById, droppableContainers, droppableRects, over, recomputeLayouts, scrollableAncestors, scrollableAncestorRects, willRecomputeLayouts, windowRect]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DndMonitorContext.Provider, {
    value: monitorState
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: contextValue
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActiveDraggableContext.Provider, {
    value: transform
  }, children)), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Accessibility, {
    announcements: announcements,
    hiddenTextDescribedById: draggableDescribedById,
    screenReaderInstructions: screenReaderInstructions$1
  }));

  function getAutoScrollerOptions() {
    const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
    const autoScrollGloballyDisabled = typeof autoScroll === 'object' ? autoScroll.enabled === false : autoScroll === false;
    const enabled = !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;

    if (typeof autoScroll === 'object') {
      return { ...autoScroll,
        enabled
      };
    }

    return {
      enabled
    };
  }
});

const NullContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const defaultRole = 'button';
const ID_PREFIX = 'Droppable';
function useDraggable({
  id,
  data,
  disabled = false,
  attributes
}) {
  const key = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(ID_PREFIX);
  const {
    active,
    activeNodeRect,
    activatorEvent,
    ariaDescribedById,
    draggableNodes,
    droppableRects,
    activators,
    over
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  const {
    role = defaultRole,
    roleDescription = 'draggable',
    tabIndex = 0
  } = attributes != null ? attributes : {};
  const isDragging = (active == null ? void 0 : active.id) === id;
  const transform = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(isDragging ? ActiveDraggableContext : NullContext);
  const [node, setNodeRef] = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useNodeRef)();
  const listeners = useSyntheticListeners(activators, id);
  const dataRef = useData(data);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    draggableNodes[id] = {
      id,
      key,
      node,
      data: dataRef
    };
    return () => {
      const node = draggableNodes[id];

      if (node && node.key === key) {
        delete draggableNodes[id];
      }
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [draggableNodes, id]);
  const memoizedAttributes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    role,
    tabIndex,
    'aria-pressed': isDragging && role === defaultRole ? true : undefined,
    'aria-roledescription': roleDescription,
    'aria-describedby': ariaDescribedById.draggable
  }), [role, tabIndex, isDragging, roleDescription, ariaDescribedById.draggable]);
  return {
    active,
    activeNodeRect,
    activatorEvent,
    attributes: memoizedAttributes,
    droppableRects,
    isDragging,
    listeners: disabled ? undefined : listeners,
    node,
    over,
    setNodeRef,
    transform
  };
}

function useDndContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
}

const ID_PREFIX$1 = 'Droppable';
function useDroppable({
  data,
  disabled = false,
  id
}) {
  const key = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(ID_PREFIX$1);
  const {
    active,
    dispatch,
    over
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  const rect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [nodeRef, setNodeRef] = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useNodeRef)();
  const dataRef = useData(data);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    dispatch({
      type: Action.RegisterDroppable,
      element: {
        id,
        key,
        disabled,
        node: nodeRef,
        rect,
        data: dataRef
      }
    });
    return () => dispatch({
      type: Action.UnregisterDroppable,
      key,
      id
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch({
      type: Action.SetDroppableDisabled,
      id,
      key,
      disabled
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [disabled]);
  return {
    active,
    rect,
    isOver: (over == null ? void 0 : over.id) === id,
    node: nodeRef,
    over,
    setNodeRef
  };
}

function useDropAnimation({
  animate,
  adjustScale,
  activeId,
  draggableNodes,
  duration,
  easing,
  dragSourceOpacity,
  node,
  transform
}) {
  const [dropAnimationComplete, setDropAnimationComplete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!animate || !activeId || !easing || !duration) {
      if (animate) {
        setDropAnimationComplete(true);
      }

      return;
    }

    requestAnimationFrame(() => {
      var _draggableNodes$activ;

      const finalNode = (_draggableNodes$activ = draggableNodes[activeId]) == null ? void 0 : _draggableNodes$activ.node.current;

      if (transform && node && finalNode && finalNode.parentNode !== null) {
        const fromNode = getMeasurableNode(node);

        if (fromNode) {
          const from = fromNode.getBoundingClientRect();
          const to = getViewRect(finalNode);
          const delta = {
            x: from.left - to.left,
            y: from.top - to.top
          };

          if (Math.abs(delta.x) || Math.abs(delta.y)) {
            const scaleDelta = {
              scaleX: adjustScale ? to.width * transform.scaleX / from.width : 1,
              scaleY: adjustScale ? to.height * transform.scaleY / from.height : 1
            };
            const finalTransform = _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transform.toString({
              x: transform.x - delta.x,
              y: transform.y - delta.y,
              ...scaleDelta
            });
            const originalOpacity = finalNode.style.opacity;

            if (dragSourceOpacity != null) {
              finalNode.style.opacity = `${dragSourceOpacity}`;
            }

            const nodeAnimation = node.animate([{
              transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transform.toString(transform)
            }, {
              transform: finalTransform
            }], {
              easing,
              duration
            });

            nodeAnimation.onfinish = () => {
              node.style.display = 'none';
              setDropAnimationComplete(true);

              if (finalNode && dragSourceOpacity != null) {
                finalNode.style.opacity = originalOpacity;
              }
            };

            return;
          }
        }
      }

      setDropAnimationComplete(true);
    });
  }, [animate, activeId, adjustScale, draggableNodes, duration, easing, dragSourceOpacity, node, transform]);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (dropAnimationComplete) {
      setDropAnimationComplete(false);
    }
  }, [dropAnimationComplete]);
  return dropAnimationComplete;
}

const defaultTransition = activatorEvent => {
  const isKeyboardActivator = activatorEvent instanceof KeyboardEvent;
  return isKeyboardActivator ? 'transform 250ms ease' : undefined;
};

const defaultDropAnimation = {
  duration: 250,
  easing: 'ease',
  dragSourceOpacity: 0
};
const DragOverlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(({
  adjustScale = false,
  children,
  dropAnimation = defaultDropAnimation,
  style: styleProp,
  transition = defaultTransition,
  modifiers,
  wrapperElement = 'div',
  className,
  zIndex = 999
}) => {
  var _active$id, _attributesSnapshot$c;

  const {
    active,
    activeNodeRect,
    activeNodeClientRect,
    containerNodeRect,
    draggableNodes,
    activatorEvent,
    over,
    dragOverlay,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  } = useDndContext();
  const transform = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ActiveDraggableContext);
  const modifiedTransform = applyModifiers(modifiers, {
    activatorEvent,
    active,
    activeNodeRect: activeNodeClientRect,
    containerNodeRect,
    draggingNodeRect: dragOverlay.rect,
    over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    transform,
    windowRect
  });
  const isDragging = active !== null;
  const finalTransform = adjustScale ? modifiedTransform : { ...modifiedTransform,
    scaleX: 1,
    scaleY: 1
  };
  const initialNodeRect = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(previousValue => {
    if (isDragging) {
      return previousValue != null ? previousValue : activeNodeRect;
    }

    return null;
  }, [isDragging, activeNodeRect]);
  const style = initialNodeRect ? {
    position: 'fixed',
    width: initialNodeRect.width,
    height: initialNodeRect.height,
    top: initialNodeRect.top,
    left: initialNodeRect.left,
    zIndex,
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transform.toString(finalTransform),
    touchAction: 'none',
    transformOrigin: adjustScale && activatorEvent ? getRelativeTransformOrigin(activatorEvent, initialNodeRect) : undefined,
    transition: typeof transition === 'function' ? transition(activatorEvent) : transition,
    ...styleProp
  } : undefined;
  const attributes = isDragging ? {
    style,
    children,
    className,
    transform: finalTransform
  } : undefined;
  const attributesSnapshot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(attributes);
  const derivedAttributes = attributes != null ? attributes : attributesSnapshot.current;
  const {
    children: finalChildren,
    transform: _,
    ...otherAttributes
  } = derivedAttributes != null ? derivedAttributes : {};
  const prevActiveId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((_active$id = active == null ? void 0 : active.id) != null ? _active$id : null);
  const dropAnimationComplete = useDropAnimation({
    animate: Boolean(dropAnimation && prevActiveId.current && !active),
    adjustScale,
    activeId: prevActiveId.current,
    draggableNodes,
    duration: dropAnimation == null ? void 0 : dropAnimation.duration,
    easing: dropAnimation == null ? void 0 : dropAnimation.easing,
    dragSourceOpacity: dropAnimation == null ? void 0 : dropAnimation.dragSourceOpacity,
    node: dragOverlay.nodeRef.current,
    transform: (_attributesSnapshot$c = attributesSnapshot.current) == null ? void 0 : _attributesSnapshot$c.transform
  });
  const shouldRender = Boolean(finalChildren && (children || dropAnimation && !dropAnimationComplete));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((active == null ? void 0 : active.id) !== prevActiveId.current) {
      var _active$id2;

      prevActiveId.current = (_active$id2 = active == null ? void 0 : active.id) != null ? _active$id2 : null;
    }

    if (active && attributesSnapshot.current !== attributes) {
      attributesSnapshot.current = attributes;
    }
  }, [active, attributes]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (dropAnimationComplete) {
      attributesSnapshot.current = undefined;
    }
  }, [dropAnimationComplete]);

  if (!shouldRender) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(wrapperElement, { ...otherAttributes,
    ref: dragOverlay.setRef
  }, finalChildren);
});


//# sourceMappingURL=core.esm.js.map


/***/ }),

/***/ "./node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSnapModifier": function() { return /* binding */ createSnapModifier; },
/* harmony export */   "restrictToFirstScrollableAncestor": function() { return /* binding */ restrictToFirstScrollableAncestor; },
/* harmony export */   "restrictToHorizontalAxis": function() { return /* binding */ restrictToHorizontalAxis; },
/* harmony export */   "restrictToParentElement": function() { return /* binding */ restrictToParentElement; },
/* harmony export */   "restrictToVerticalAxis": function() { return /* binding */ restrictToVerticalAxis; },
/* harmony export */   "restrictToWindowEdges": function() { return /* binding */ restrictToWindowEdges; },
/* harmony export */   "snapCenterToCursor": function() { return /* binding */ snapCenterToCursor; }
/* harmony export */ });
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");


function createSnapModifier(gridSize) {
  return ({
    transform
  }) => ({ ...transform,
    x: Math.ceil(transform.x / gridSize) * gridSize,
    y: Math.ceil(transform.y / gridSize) * gridSize
  });
}

const restrictToHorizontalAxis = ({
  transform
}) => {
  return { ...transform,
    y: 0
  };
};

function restrictToBoundingRect(transform, rect, boundingRect) {
  const value = { ...transform
  };

  if (rect.top + transform.y <= boundingRect.top) {
    value.y = boundingRect.top - rect.top;
  } else if (rect.bottom + transform.y >= boundingRect.top + boundingRect.height) {
    value.y = boundingRect.top + boundingRect.height - rect.bottom;
  }

  if (rect.left + transform.x <= boundingRect.left) {
    value.x = boundingRect.left - rect.left;
  } else if (rect.right + transform.x >= boundingRect.left + boundingRect.width) {
    value.x = boundingRect.left + boundingRect.width - rect.right;
  }

  return value;
}

const restrictToParentElement = ({
  transform,
  activeNodeRect,
  containerNodeRect
}) => {
  if (!activeNodeRect || !containerNodeRect) {
    return transform;
  }

  return restrictToBoundingRect(transform, activeNodeRect, containerNodeRect);
};

const restrictToFirstScrollableAncestor = ({
  transform,
  activeNodeRect,
  scrollableAncestorRects
}) => {
  const firstScrollableAncestorRect = scrollableAncestorRects[0];

  if (!activeNodeRect || !firstScrollableAncestorRect) {
    return transform;
  }

  return restrictToBoundingRect(transform, activeNodeRect, firstScrollableAncestorRect);
};

const restrictToVerticalAxis = ({
  transform
}) => {
  return { ...transform,
    x: 0
  };
};

const restrictToWindowEdges = ({
  transform,
  activeNodeRect,
  windowRect
}) => {
  if (!activeNodeRect || !windowRect) {
    return transform;
  }

  return restrictToBoundingRect(transform, activeNodeRect, windowRect);
};

const snapCenterToCursor = ({
  activatorEvent,
  activeNodeRect,
  transform
}) => {
  if (activeNodeRect && activatorEvent && ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_0__.isTouchEvent)(activatorEvent) || (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_0__.hasViewportRelativeCoordinates)(activatorEvent))) {
    const activatorCoordinates = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_0__.getEventCoordinates)(activatorEvent);
    const offsetX = activatorCoordinates.x - activeNodeRect.left;
    const offsetY = activatorCoordinates.y - activeNodeRect.top;
    return { ...transform,
      x: transform.x + offsetX - activeNodeRect.width / 2,
      y: transform.y + offsetY - activeNodeRect.height / 2
    };
  }

  return transform;
};


//# sourceMappingURL=modifiers.esm.js.map


/***/ }),

/***/ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@dnd-kit/sortable/dist/sortable.esm.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortableContext": function() { return /* binding */ SortableContext; },
/* harmony export */   "arrayMove": function() { return /* binding */ arrayMove; },
/* harmony export */   "defaultAnimateLayoutChanges": function() { return /* binding */ defaultAnimateLayoutChanges; },
/* harmony export */   "horizontalListSortingStrategy": function() { return /* binding */ horizontalListSortingStrategy; },
/* harmony export */   "rectSortingStrategy": function() { return /* binding */ rectSortingStrategy; },
/* harmony export */   "rectSwappingStrategy": function() { return /* binding */ rectSwappingStrategy; },
/* harmony export */   "sortableKeyboardCoordinates": function() { return /* binding */ sortableKeyboardCoordinates; },
/* harmony export */   "useSortable": function() { return /* binding */ useSortable; },
/* harmony export */   "verticalListSortingStrategy": function() { return /* binding */ verticalListSortingStrategy; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");




/**
 * Move an array item to a different position. Returns a new array with the item moved to the new position.
 */
function arrayMove(array, from, to) {
  const newArray = array.slice();
  newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
  return newArray;
}

function getSortedRects(items, layoutRects) {
  return items.reduce((accumulator, id, index) => {
    const layoutRect = layoutRects.get(id);

    if (layoutRect) {
      accumulator[index] = layoutRect;
    }

    return accumulator;
  }, Array(items.length));
}

function isValidIndex(index) {
  return index !== null && index >= 0;
}

// To-do: We should be calculating scale transformation
const defaultScale = {
  scaleX: 1,
  scaleY: 1
};
const horizontalListSortingStrategy = ({
  layoutRects,
  activeNodeRect: fallbackActiveRect,
  activeIndex,
  overIndex,
  index
}) => {
  var _layoutRects$activeIn;

  const activeNodeRect = (_layoutRects$activeIn = layoutRects[activeIndex]) != null ? _layoutRects$activeIn : fallbackActiveRect;

  if (!activeNodeRect) {
    return null;
  }

  const itemGap = getItemGap(layoutRects, index, activeIndex);

  if (index === activeIndex) {
    const newIndexRect = layoutRects[overIndex];

    if (!newIndexRect) {
      return null;
    }

    return {
      x: activeIndex < overIndex ? newIndexRect.offsetLeft + newIndexRect.width - (activeNodeRect.offsetLeft + activeNodeRect.width) : newIndexRect.offsetLeft - activeNodeRect.offsetLeft,
      y: 0,
      ...defaultScale
    };
  }

  if (index > activeIndex && index <= overIndex) {
    return {
      x: -activeNodeRect.width - itemGap,
      y: 0,
      ...defaultScale
    };
  }

  if (index < activeIndex && index >= overIndex) {
    return {
      x: activeNodeRect.width + itemGap,
      y: 0,
      ...defaultScale
    };
  }

  return {
    x: 0,
    y: 0,
    ...defaultScale
  };
};

function getItemGap(layoutRects, index, activeIndex) {
  const currentRect = layoutRects[index];
  const previousRect = layoutRects[index - 1];
  const nextRect = layoutRects[index + 1];

  if (!currentRect || !previousRect && !nextRect) {
    return 0;
  }

  if (activeIndex < index) {
    return previousRect ? currentRect.offsetLeft - (previousRect.offsetLeft + previousRect.width) : nextRect.offsetLeft - (currentRect.offsetLeft + currentRect.width);
  }

  return nextRect ? nextRect.offsetLeft - (currentRect.offsetLeft + currentRect.width) : currentRect.offsetLeft - (previousRect.offsetLeft + previousRect.width);
}

const rectSortingStrategy = ({
  layoutRects,
  activeIndex,
  overIndex,
  index
}) => {
  const newRects = arrayMove(layoutRects, overIndex, activeIndex);
  const oldRect = layoutRects[index];
  const newRect = newRects[index];

  if (!newRect || !oldRect) {
    return null;
  }

  return {
    x: newRect.offsetLeft - oldRect.offsetLeft,
    y: newRect.offsetTop - oldRect.offsetTop,
    scaleX: newRect.width / oldRect.width,
    scaleY: newRect.height / oldRect.height
  };
};

const rectSwappingStrategy = ({
  activeIndex,
  index,
  layoutRects,
  overIndex
}) => {
  let oldRect;
  let newRect;

  if (index === activeIndex) {
    oldRect = layoutRects[index];
    newRect = layoutRects[overIndex];
  }

  if (index === overIndex) {
    oldRect = layoutRects[index];
    newRect = layoutRects[activeIndex];
  }

  if (!newRect || !oldRect) {
    return null;
  }

  return {
    x: newRect.offsetLeft - oldRect.offsetLeft,
    y: newRect.offsetTop - oldRect.offsetTop,
    scaleX: newRect.width / oldRect.width,
    scaleY: newRect.height / oldRect.height
  };
};

// To-do: We should be calculating scale transformation
const defaultScale$1 = {
  scaleX: 1,
  scaleY: 1
};
const verticalListSortingStrategy = ({
  activeIndex,
  activeNodeRect: fallbackActiveRect,
  index,
  layoutRects,
  overIndex
}) => {
  var _layoutRects$activeIn;

  const activeNodeRect = (_layoutRects$activeIn = layoutRects[activeIndex]) != null ? _layoutRects$activeIn : fallbackActiveRect;

  if (!activeNodeRect) {
    return null;
  }

  if (index === activeIndex) {
    const overIndexRect = layoutRects[overIndex];

    if (!overIndexRect) {
      return null;
    }

    return {
      x: 0,
      y: activeIndex < overIndex ? overIndexRect.offsetTop + overIndexRect.height - (activeNodeRect.offsetTop + activeNodeRect.height) : overIndexRect.offsetTop - activeNodeRect.offsetTop,
      ...defaultScale$1
    };
  }

  const itemGap = getItemGap$1(layoutRects, index, activeIndex);

  if (index > activeIndex && index <= overIndex) {
    return {
      x: 0,
      y: -activeNodeRect.height - itemGap,
      ...defaultScale$1
    };
  }

  if (index < activeIndex && index >= overIndex) {
    return {
      x: 0,
      y: activeNodeRect.height + itemGap,
      ...defaultScale$1
    };
  }

  return {
    x: 0,
    y: 0,
    ...defaultScale$1
  };
};

function getItemGap$1(layoutRects, index, activeIndex) {
  const currentRect = layoutRects[index];
  const previousRect = layoutRects[index - 1];
  const nextRect = layoutRects[index + 1];

  if (!currentRect) {
    return 0;
  }

  if (activeIndex < index) {
    return previousRect ? currentRect.offsetTop - (previousRect.offsetTop + previousRect.height) : nextRect ? nextRect.offsetTop - (currentRect.offsetTop + currentRect.height) : 0;
  }

  return nextRect ? nextRect.offsetTop - (currentRect.offsetTop + currentRect.height) : previousRect ? currentRect.offsetTop - (previousRect.offsetTop + previousRect.height) : 0;
}

const ID_PREFIX = 'Sortable';
const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  activeIndex: -1,
  containerId: ID_PREFIX,
  disableTransforms: false,
  items: [],
  overIndex: -1,
  useDragOverlay: false,
  sortedRects: [],
  strategy: rectSortingStrategy,
  wasDragging: {
    current: false
  }
});
function SortableContext({
  children,
  id,
  items: userDefinedItems,
  strategy = rectSortingStrategy
}) {
  const {
    active,
    dragOverlay,
    droppableRects,
    over,
    recomputeLayouts,
    willRecomputeLayouts
  } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDndContext)();
  const containerId = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(ID_PREFIX, id);
  const useDragOverlay = Boolean(dragOverlay.rect !== null);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => userDefinedItems.map(item => typeof item === 'string' ? item : item.id), [userDefinedItems]);
  const isDragging = active != null;
  const wasDragging = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const activeIndex = active ? items.indexOf(active.id) : -1;
  const isSorting = activeIndex !== -1;
  const overIndex = over ? items.indexOf(over.id) : -1;
  const previousItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(items);
  const sortedRects = getSortedRects(items, droppableRects);
  const itemsHaveChanged = !isEqual(items, previousItemsRef.current);
  const disableTransforms = overIndex !== -1 && activeIndex === -1 || itemsHaveChanged;
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (itemsHaveChanged && isSorting && !willRecomputeLayouts) {
      // To-do: Add partial recompution of only subset of rects
      recomputeLayouts();
    }
  }, [itemsHaveChanged, isSorting, recomputeLayouts, willRecomputeLayouts]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    previousItemsRef.current = items;
  }, [items]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const timeoutId = setTimeout(() => {
      wasDragging.current = isDragging;
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [isDragging]);
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    activeIndex,
    containerId,
    disableTransforms,
    items,
    overIndex,
    useDragOverlay,
    sortedRects,
    strategy,
    wasDragging
  }), [activeIndex, containerId, disableTransforms, items, overIndex, sortedRects, useDragOverlay, strategy, wasDragging]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: contextValue
  }, children);
}

function isEqual(arr1, arr2) {
  return arr1.join() === arr2.join();
}

const defaultAnimateLayoutChanges = ({
  containerId,
  isSorting,
  wasDragging,
  index,
  items,
  newIndex,
  previousItems,
  previousContainerId,
  transition
}) => {
  if (!transition || !wasDragging) {
    return false;
  }

  if (previousItems !== items && index === newIndex) {
    return false;
  }

  if (isSorting) {
    return true;
  }

  return newIndex !== index && containerId === previousContainerId;
};
const defaultTransition = {
  duration: 200,
  easing: 'ease'
};
const transitionProperty = 'transform';
const disabledTransition = /*#__PURE__*/_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transition.toString({
  property: transitionProperty,
  duration: 0,
  easing: 'linear'
});
const defaultAttributes = {
  roleDescription: 'sortable'
};

/*
 * When the index of an item changes while sorting,
 * we need to temporarily disable the transforms
 */

function useDerivedTransform({
  disabled,
  index,
  node,
  rect
}) {
  const [derivedTransform, setDerivedtransform] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const previousIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(index);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (!disabled && index !== previousIndex.current && node.current) {
      const initial = rect.current;

      if (initial) {
        const current = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.getBoundingClientRect)(node.current);
        const delta = {
          x: initial.offsetLeft - current.offsetLeft,
          y: initial.offsetTop - current.offsetTop,
          scaleX: initial.width / current.width,
          scaleY: initial.height / current.height
        };

        if (delta.x || delta.y) {
          setDerivedtransform(delta);
        }
      }
    }

    if (index !== previousIndex.current) {
      previousIndex.current = index;
    }
  }, [disabled, index, node, rect]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (derivedTransform) {
      requestAnimationFrame(() => {
        setDerivedtransform(null);
      });
    }
  }, [derivedTransform]);
  return derivedTransform;
}

function useSortable({
  animateLayoutChanges = defaultAnimateLayoutChanges,
  attributes: userDefinedAttributes,
  disabled,
  data: customData,
  id,
  strategy: localStrategy,
  transition = defaultTransition
}) {
  const {
    items,
    containerId,
    activeIndex,
    disableTransforms,
    sortedRects,
    overIndex,
    useDragOverlay,
    strategy: globalStrategy,
    wasDragging
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  const index = items.indexOf(id);
  const data = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    sortable: {
      containerId,
      index,
      items
    },
    ...customData
  }), [containerId, customData, index, items]);
  const {
    rect,
    node,
    setNodeRef: setDroppableNodeRef
  } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDroppable)({
    id,
    data
  });
  const {
    active,
    activeNodeRect,
    activatorEvent,
    attributes,
    setNodeRef: setDraggableNodeRef,
    listeners,
    isDragging,
    over,
    transform
  } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDraggable)({
    id,
    data,
    attributes: { ...defaultAttributes,
      ...userDefinedAttributes
    },
    disabled
  });
  const setNodeRef = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useCombinedRefs)(setDroppableNodeRef, setDraggableNodeRef);
  const isSorting = Boolean(active);
  const displaceItem = isSorting && wasDragging.current && !disableTransforms && isValidIndex(activeIndex) && isValidIndex(overIndex);
  const shouldDisplaceDragSource = !useDragOverlay && isDragging;
  const dragSourceDisplacement = shouldDisplaceDragSource && displaceItem ? transform : null;
  const strategy = localStrategy != null ? localStrategy : globalStrategy;
  const finalTransform = displaceItem ? dragSourceDisplacement != null ? dragSourceDisplacement : strategy({
    layoutRects: sortedRects,
    activeNodeRect,
    activeIndex,
    overIndex,
    index
  }) : null;
  const newIndex = isValidIndex(activeIndex) && isValidIndex(overIndex) ? arrayMove(items, activeIndex, overIndex).indexOf(id) : index;
  const prevItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(items);
  const itemsHaveChanged = items !== prevItems.current;
  const prevNewIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(newIndex);
  const previousContainerId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(containerId);
  const shouldAnimateLayoutChanges = animateLayoutChanges({
    active,
    containerId,
    isDragging,
    isSorting,
    id,
    index,
    items,
    newIndex: prevNewIndex.current,
    previousItems: prevItems.current,
    previousContainerId: previousContainerId.current,
    transition,
    wasDragging: wasDragging.current
  });
  const derivedTransform = useDerivedTransform({
    disabled: !shouldAnimateLayoutChanges,
    index,
    node,
    rect
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isSorting && prevNewIndex.current !== newIndex) {
      prevNewIndex.current = newIndex;
    }

    if (containerId !== previousContainerId.current) {
      previousContainerId.current = containerId;
    }

    if (items !== prevItems.current) {
      prevItems.current = items;
    }
  }, [isSorting, newIndex, containerId, items]);
  return {
    active,
    attributes,
    activatorEvent,
    rect,
    index,
    isSorting,
    isDragging,
    listeners,
    node,
    overIndex,
    over,
    setNodeRef,
    setDroppableNodeRef,
    setDraggableNodeRef,
    transform: derivedTransform != null ? derivedTransform : finalTransform,
    transition: getTransition()
  };

  function getTransition() {
    if ( // Temporarily disable transitions for a single frame to set up derived transforms
    derivedTransform || // Or to prevent items jumping to back to their "new" position when items change
    itemsHaveChanged && prevNewIndex.current === index) {
      return disabledTransition;
    }

    if (shouldDisplaceDragSource || !transition) {
      return undefined;
    }

    if (isSorting || shouldAnimateLayoutChanges) {
      return _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transition.toString({ ...transition,
        property: transitionProperty
      });
    }

    return undefined;
  }
}

const directions = [_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Down, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Right, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Up, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Left];
const sortableKeyboardCoordinates = (event, {
  context: {
    active,
    droppableContainers,
    translatedRect,
    scrollableAncestors
  }
}) => {
  if (directions.includes(event.code)) {
    event.preventDefault();

    if (!active || !translatedRect) {
      return;
    }

    const filteredContainers = [];
    droppableContainers.getEnabled().forEach(entry => {
      if (!entry || (entry == null ? void 0 : entry.disabled)) {
        return;
      }

      const node = entry == null ? void 0 : entry.node.current;

      if (!node) {
        return;
      }

      const rect = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.getViewRect)(node);
      const container = { ...entry,
        rect: {
          current: rect
        }
      };

      switch (event.code) {
        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Down:
          if (translatedRect.top + translatedRect.height <= rect.top) {
            filteredContainers.push(container);
          }

          break;

        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Up:
          if (translatedRect.top >= rect.top + rect.height) {
            filteredContainers.push(container);
          }

          break;

        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Left:
          if (translatedRect.left >= rect.left + rect.width) {
            filteredContainers.push(container);
          }

          break;

        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Right:
          if (translatedRect.left + translatedRect.width <= rect.left) {
            filteredContainers.push(container);
          }

          break;
      }
    });
    const closestId = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.closestCorners)({
      active,
      collisionRect: translatedRect,
      droppableContainers: filteredContainers
    });

    if (closestId) {
      var _droppableContainers$;

      const newNode = (_droppableContainers$ = droppableContainers.get(closestId)) == null ? void 0 : _droppableContainers$.node.current;

      if (newNode) {
        const newScrollAncestors = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.getScrollableAncestors)(newNode);
        const hasDifferentScrollAncestors = newScrollAncestors.some((element, index) => scrollableAncestors[index] !== element);
        const newRect = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.getViewRect)(newNode);
        const offset = hasDifferentScrollAncestors ? {
          x: 0,
          y: 0
        } : {
          x: translatedRect.width - newRect.width,
          y: translatedRect.height - newRect.height
        };
        const newCoordinates = {
          x: newRect.left - offset.x,
          y: newRect.top - offset.y
        };
        return newCoordinates;
      }
    }
  }

  return undefined;
};


//# sourceMappingURL=sortable.esm.js.map


/***/ }),

/***/ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@dnd-kit/utilities/dist/utilities.esm.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSS": function() { return /* binding */ CSS; },
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "canUseDOM": function() { return /* binding */ canUseDOM; },
/* harmony export */   "getEventCoordinates": function() { return /* binding */ getEventCoordinates; },
/* harmony export */   "hasViewportRelativeCoordinates": function() { return /* binding */ hasViewportRelativeCoordinates; },
/* harmony export */   "isTouchEvent": function() { return /* binding */ isTouchEvent; },
/* harmony export */   "subtract": function() { return /* binding */ subtract; },
/* harmony export */   "useCombinedRefs": function() { return /* binding */ useCombinedRefs; },
/* harmony export */   "useInterval": function() { return /* binding */ useInterval; },
/* harmony export */   "useIsomorphicLayoutEffect": function() { return /* binding */ useIsomorphicLayoutEffect; },
/* harmony export */   "useLazyMemo": function() { return /* binding */ useLazyMemo; },
/* harmony export */   "useNodeRef": function() { return /* binding */ useNodeRef; },
/* harmony export */   "useUniqueId": function() { return /* binding */ useUniqueId; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useCombinedRefs(...refs) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => node => {
    refs.forEach(ref => ref(node));
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  refs);
}

// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const canUseDOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';

/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 * @param callback {function} Callback function that is invoked when the dependencies of the hook change
 */

const useIsomorphicLayoutEffect = canUseDOM ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

function useInterval() {
  const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((listener, duration) => {
    intervalRef.current = setInterval(listener, duration);
  }, []);
  const clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  return [set, clear];
}

function useLazyMemo(callback, dependencies) {
  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const newValue = callback(valueRef.current);
    valueRef.current = newValue;
    return newValue;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [...dependencies]);
}

function useNodeRef() {
  const node = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const setNodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(element => {
    node.current = element;
  }, []);
  return [node, setNodeRef];
}

let ids = {};
function useUniqueId(prefix, value) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (value) {
      return value;
    }

    const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
    ids[prefix] = id;
    return `${prefix}-${id}`;
  }, [prefix, value]);
}

function createAdjustmentFn(modifier) {
  return (object, ...adjustments) => {
    return adjustments.reduce((accumulator, adjustment) => {
      const entries = Object.entries(adjustment);

      for (const [key, valueAdjustment] of entries) {
        const value = accumulator[key];

        if (value != null) {
          accumulator[key] = value + modifier * valueAdjustment;
        }
      }

      return accumulator;
    }, { ...object
    });
  };
}

const add = /*#__PURE__*/createAdjustmentFn(1);
const subtract = /*#__PURE__*/createAdjustmentFn(-1);

function hasViewportRelativeCoordinates(event) {
  return 'clientX' in event && 'clientY' in event;
}

function isTouchEvent(event) {
  var _window;

  return ((_window = window) == null ? void 0 : _window.TouchEvent) && event instanceof TouchEvent;
}

/**
 * Returns the normalized x and y coordinates for mouse and touch events.
 */

function getEventCoordinates(event) {
  if (isTouchEvent(event)) {
    if (event.touches && event.touches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.touches[0];
      return {
        x,
        y
      };
    } else if (event.changedTouches && event.changedTouches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.changedTouches[0];
      return {
        x,
        y
      };
    }
  }

  if (hasViewportRelativeCoordinates(event)) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }

  return {
    x: 0,
    y: 0
  };
}

const CSS = /*#__PURE__*/Object.freeze({
  Translate: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        x,
        y
      } = transform;
      return `translate3d(${x ? Math.round(x) : 0}px, ${y ? Math.round(y) : 0}px, 0)`;
    }

  },
  Scale: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        scaleX,
        scaleY
      } = transform;
      return `scaleX(${scaleX}) scaleY(${scaleY})`;
    }

  },
  Transform: {
    toString(transform) {
      if (!transform) {
        return;
      }

      return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(' ');
    }

  },
  Transition: {
    toString({
      property,
      duration,
      easing
    }) {
      return `${property} ${duration}ms ${easing}`;
    }

  }
});


//# sourceMappingURL=utilities.esm.js.map


/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");





function Edit({
  attributes,
  setAttributes
}) {
  const {
    columns
  } = attributes;

  const onChangeColumns = newColumns => {
    setAttributes({
      columns: newColumns
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `has-${columns}-columns`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Columns', 'team-members'),
    min: 1,
    max: 6,
    onChange: onChangeColumns,
    value: columns
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ['blocks-course/team-member'],
    orientation: "horizontal",
    template: [['blocks-course/team-member'], ['blocks-course/team-member'], ['blocks-course/team-member']]
  }));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _team_member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team-member */ "./src/team-member/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('blocks-course/team-members', {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  transforms: {
    from: [{
      type: 'block',
      blocks: ['core/gallery'],
      transform: ({
        images,
        columns
      }) => {
        const innerBlocks = images.map(({
          url,
          id,
          alt
        }) => {
          return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('blocks-course/team-member', {
            alt,
            id,
            url
          });
        });
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('blocks-course/team-members', {
          columns: columns || 2
        }, innerBlocks);
      }
    }, {
      type: 'block',
      blocks: ['core/image'],
      isMultiBlock: true,
      transform: attributes => {
        const innerBlocks = attributes.map(({
          url,
          id,
          alt
        }) => {
          return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('blocks-course/team-member', {
            alt,
            id,
            url
          });
        });
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('blocks-course/team-members', {
          columns: attributes.length > 3 ? 3 : attributes.length
        }, innerBlocks);
      }
    }]
  }
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    columns
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `has-${columns}-columns`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/team-member/edit.js":
/*!*********************************!*\
  !*** ./src/team-member/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var _dnd_kit_modifiers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @dnd-kit/modifiers */ "./node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js");
/* harmony import */ var _sortable_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sortable-item */ "./src/team-member/sortable-item.js");













function Edit({
  attributes,
  setAttributes,
  noticeOperations,
  noticeUI,
  isSelected
}) {
  const {
    name,
    bio,
    url,
    alt,
    id,
    socialLinks
  } = attributes;
  const [blobURL, setBlobURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [selectedLink, setSelectedLink] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const prevURL = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.usePrevious)(url);
  const prevIsSelected = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.usePrevious)(isSelected);
  const sensors = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_7__.useSensors)((0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_7__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_7__.PointerSensor, {
    activationConstraint: {
      distance: 5
    }
  }));
  const titleRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const imageObject = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getMedia
    } = select('core');
    return id ? getMedia(id) : null;
  }, [id]);
  const imageSizes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).getSettings().imageSizes;
  }, []);

  const getImageSizeOptions = () => {
    if (!imageObject) return [];
    const options = [];
    const sizes = imageObject.media_details.sizes;

    for (const key in sizes) {
      const size = sizes[key];
      const imageSize = imageSizes.find(s => s.slug === key);

      if (imageSize) {
        options.push({
          label: imageSize.name,
          value: size.source_url
        });
      }
    }

    return options;
  };

  const onChangeName = newName => {
    setAttributes({
      name: newName
    });
  };

  const onChangeBio = newBio => {
    setAttributes({
      bio: newBio
    });
  };

  const onChangeAlt = newAlt => {
    setAttributes({
      alt: newAlt
    });
  };

  const onSelectImage = image => {
    if (!image || !image.url) {
      setAttributes({
        url: undefined,
        id: undefined,
        alt: ''
      });
      return;
    }

    setAttributes({
      url: image.url,
      id: image.id,
      alt: image.alt
    });
  };

  const onSelectURL = newURL => {
    setAttributes({
      url: newURL,
      id: undefined,
      alt: ''
    });
  };

  const onChangeImageSize = newURL => {
    setAttributes({
      url: newURL
    });
  };

  const onUploadError = message => {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
  };

  const removeImage = () => {
    setAttributes({
      url: undefined,
      alt: '',
      id: undefined
    });
  };

  const addNewSocialItem = () => {
    setAttributes({
      socialLinks: [...socialLinks, {
        icon: 'wordpress',
        link: ''
      }]
    });
    setSelectedLink(socialLinks.length);
  };

  const updateSocialItem = (type, value) => {
    const socialLinksCopy = [...socialLinks];
    socialLinksCopy[selectedLink][type] = value;
    setAttributes({
      socialLinks: socialLinksCopy
    });
  };

  const removeSocialItem = () => {
    setAttributes({
      socialLinks: [...socialLinks.slice(0, selectedLink), ...socialLinks.slice(selectedLink + 1)]
    });
    setSelectedLink();
  };

  const handleDragEnd = event => {
    const {
      active,
      over
    } = event;

    if (active && over && active.id !== over.id) {
      const oldIndex = socialLinks.findIndex(i => active.id === `${i.icon}-${i.link}`);
      const newIndex = socialLinks.findIndex(i => over.id === `${i.icon}-${i.link}`);
      setAttributes({
        socialLinks: (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_8__.arrayMove)(socialLinks, oldIndex, newIndex)
      });
      setSelectedLink(newIndex);
    }
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!id && (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.isBlobURL)(url)) {
      setAttributes({
        url: undefined,
        alt: ''
      });
    }
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.isBlobURL)(url)) {
      setBlobURL(url);
    } else {
      (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.revokeBlobURL)(blobURL);
      setBlobURL();
    }
  }, [url]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (url && !prevURL && isSelected) {
      titleRef.current.focus();
    }
  }, [url, prevURL]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (prevIsSelected && !isSelected) {
      setSelectedLink();
    }
  }, [isSelected, prevIsSelected]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Settings', 'team-members')
  }, id && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Size', 'team-members'),
    options: getImageSizeOptions(),
    value: url,
    onChange: onChangeImageSize
  }), url && !(0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.isBlobURL)(url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alt Text', 'team-members'),
    value: alt,
    onChange: onChangeAlt,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Alternative text describes your image to people can't see it. Add a short description with its key details.", 'team-members')
  }))), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
    group: "inline"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaReplaceFlow, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace Image', 'team-members'),
    onSelect: onSelectImage,
    onSelectURL: onSelectURL,
    onError: onUploadError,
    accept: "image/*",
    allowedTypes: ['image'],
    mediaId: id,
    mediaURL: url
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
    onClick: removeImage
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove Image', 'team-members'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wp-block-blocks-course-team-member-img${(0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.isBlobURL)(url) ? ' is-loading' : ''}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: alt
  }), (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.isBlobURL)(url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
    icon: "admin-users",
    onSelect: onSelectImage,
    onSelectURL: onSelectURL,
    onError: onUploadError,
    accept: "image/*",
    allowedTypes: ['image'],
    disableMediaButtons: url,
    notices: noticeUI
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    ref: titleRef,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Member Name', 'team-member'),
    tagName: "h4",
    onChange: onChangeName,
    value: name,
    allowedFormats: []
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Member Bio', 'team-member'),
    tagName: "p",
    onChange: onChangeBio,
    value: bio,
    allowedFormats: []
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-blocks-course-team-member-social-links"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_7__.DndContext, {
    sensors: sensors,
    onDragEnd: handleDragEnd,
    modifiers: [_dnd_kit_modifiers__WEBPACK_IMPORTED_MODULE_9__.restrictToHorizontalAxis]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_8__.SortableContext, {
    items: socialLinks.map(item => `${item.icon}-${item.link}`),
    strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_8__.horizontalListSortingStrategy
  }, socialLinks.map((item, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sortable_item__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: `${item.icon}-${item.link}`,
      id: `${item.icon}-${item.link}`,
      index: index,
      selectedLink: selectedLink,
      setSelectedLink: setSelectedLink,
      icon: item.icon
    });
  }))), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "wp-block-blocks-course-team-member-add-icon-li"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Social Link', 'team-members')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Social Link', 'team-members'),
    onClick: addNewSocialItem
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
    icon: "plus"
  })))))), selectedLink !== undefined && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-blocks-course-team-member-link-form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'text-members'),
    value: socialLinks[selectedLink].icon,
    onChange: icon => {
      updateSocialItem('icon', icon);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('URL', 'text-members'),
    value: socialLinks[selectedLink].link,
    onChange: link => {
      updateSocialItem('link', link);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    isDestructive: true,
    onClick: removeSocialItem
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove Link', 'text-members')))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.withNotices)(Edit));

/***/ }),

/***/ "./src/team-member/index.js":
/*!**********************************!*\
  !*** ./src/team-member/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/team-member/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/team-member/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('blocks-course/team-member', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Team Member', 'team-members'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A team member item', 'team-members'),
  icon: 'admin-users',
  parent: ['blocks-course/team-members'],
  supports: {
    reusable: false,
    html: false
  },
  attributes: {
    name: {
      type: 'string',
      source: 'html',
      selector: 'h4'
    },
    bio: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    id: {
      type: 'number'
    },
    alt: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'alt',
      default: ''
    },
    url: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src'
    },
    socialLinks: {
      type: 'array',
      default: [],
      source: 'query',
      selector: '.wp-block-blocks-course-team-member-social-links ul li',
      query: {
        icon: {
          source: 'attribute',
          attribute: 'data-icon'
        },
        link: {
          source: 'attribute',
          selector: 'a',
          attribute: 'href'
        }
      }
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/team-member/save.js":
/*!*********************************!*\
  !*** ./src/team-member/save.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function Save({
  attributes
}) {
  const {
    name,
    bio,
    url,
    alt,
    id,
    socialLinks
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: alt,
    className: id ? `wp-image-${id}` : null
  }), name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h4",
    value: name
  }), bio && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: bio
  }), socialLinks.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-blocks-course-team-member-social-links"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, socialLinks.map((item, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: index,
      "data-icon": item.icon
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: item.link
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: item.icon
    })));
  }))));
}

/***/ }),

/***/ "./src/team-member/sortable-item.js":
/*!******************************************!*\
  !*** ./src/team-member/sortable-item.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SortableItem; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__.useSortable)({
    id: props.id
  });
  const style = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_3__.CSS.Transform.toString(transform),
    transition
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: setNodeRef,
    style: style
  }, attributes, listeners, {
    className: props.selectedLink === props.index ? 'is-selected' : null
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Edit Social Link', 'team-members'),
    onClick: () => props.setSelectedLink(props.index)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
    icon: props.icon
  })));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkboilerplate"] = self["webpackChunkboilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map