import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useRef, useState, useMemo, useCallback } from 'react';
/* empty css                         */
import { BubbleMenu, NodeViewWrapper, isNumber, ReactNodeViewRenderer, useEditor, EditorContent } from '@tiptap/react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { c as cn, L as Label, I as Input, B as Button, D as Dialog, a as DialogTrigger, b as DialogContent, d as DialogHeader, e as DialogTitle, f as DialogDescription } from './Layout_D9Lz5knS.mjs';
import { ChevronRightIcon, CheckIcon, DotFilledIcon, LetterCaseCapitalizeIcon, CaretDownIcon, DotsHorizontalIcon, FontBoldIcon, FontItalicIcon, ListBulletIcon, PlusIcon, CodeIcon, QuoteIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva } from 'class-variance-authority';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { Link2Icon, ImageIcon, ExternalLinkIcon, ScissorsLineDashed, CopyIcon, TrashIcon } from 'lucide-react';
import { S as Switch } from './index_CHAcdH8q.mjs';
import { StarterKit } from '@tiptap/starter-kit';
import { Typography } from '@tiptap/extension-typography';
import { Placeholder } from '@tiptap/extension-placeholder';
import { TextStyle } from '@tiptap/extension-text-style';
import { CodeBlockLowlight as CodeBlockLowlight$1 } from '@tiptap/extension-code-block-lowlight';
import { createLowlight, common } from 'lowlight';
import { Color as Color$1 } from '@tiptap/extension-color';
import { Plugin, TextSelection, PluginKey } from '@tiptap/pm/state';
import { HorizontalRule as HorizontalRule$1 } from '@tiptap/extension-horizontal-rule';
import { Image as Image$2 } from '@tiptap/extension-image';
import { getMarkRange, mergeAttributes, Extension } from '@tiptap/core';
import TiptapLink from '@tiptap/extension-link';
import { DecorationSet, Decoration } from '@tiptap/pm/view';

const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRightIcon, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(DotFilledIcon, { className: "h-4 w-4 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2",
        lg: "h-10 px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsx(
  TogglePrimitive.Root,
  {
    ref,
    className: cn(toggleVariants({ variant, size, className })),
    ...props
  }
));
Toggle.displayName = TogglePrimitive.Root.displayName;

const ToolbarButton = React.forwardRef(
  ({ isActive, children, tooltip, className, tooltipOptions, ...props }, ref) => {
    const toggleButton = /* @__PURE__ */ jsx(Toggle, { size: "sm", ref, className: cn("size-8 p-0", { "bg-accent": isActive }, className), ...props, children });
    if (!tooltip) {
      return toggleButton;
    }
    return /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: toggleButton }),
      /* @__PURE__ */ jsx(TooltipContent, { ...tooltipOptions, children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center text-center", children: tooltip }) })
    ] }) });
  }
);
ToolbarButton.displayName = "ToolbarButton";

let isMac;
function getPlatform() {
  const nav = navigator;
  if (nav.userAgentData) {
    if (nav.userAgentData.platform) {
      return nav.userAgentData.platform;
    }
    nav.userAgentData.getHighEntropyValues(["platform"]).then((highEntropyValues) => {
      if (highEntropyValues.platform) {
        return highEntropyValues.platform;
      }
    });
  }
  if (typeof navigator.platform === "string") {
    return navigator.platform;
  }
  return "";
}
function isMacOS() {
  if (isMac === void 0) {
    isMac = getPlatform().toLowerCase().includes("mac");
  }
  return isMac;
}
function getShortcutKey(key) {
  if (key.toLowerCase() === "mod") {
    return isMacOS() ? "⌘" : "Ctrl";
  } else if (key.toLowerCase() === "alt") {
    return isMacOS() ? "⌥" : "Alt";
  } else if (key.toLowerCase() === "shift") {
    return isMacOS() ? "⇧" : "Shift";
  } else {
    return key;
  }
}
function getShortcutKeys(keys) {
  return keys.map((key) => getShortcutKey(key)).join("");
}
function getOutput(editor, format) {
  if (format === "json") {
    return JSON.stringify(editor.getJSON());
  }
  if (format === "html") {
    return editor.getText() ? String(editor.getHTML()) : "";
  }
  return editor.getText();
}
function setLink(editor, { url, text, openInNewTab }) {
  editor.chain().extendMarkRange("link").insertContent({
    type: "text",
    text: text || url,
    marks: [
      {
        type: "link",
        attrs: {
          href: url,
          target: openInNewTab ? "_blank" : ""
        }
      }
    ]
  }).setLink({ href: url }).focus().run();
}

const ShortcutKey = ({ className, keys, ...props }) => {
  return /* @__PURE__ */ jsx("span", { className: cn("text-xs tracking-widest opacity-60", className), ...props, children: /* @__PURE__ */ jsx("span", { className: cn("ml-4"), children: getShortcutKeys(keys) }) });
};
ShortcutKey.displayName = "ShortcutKey";

const TEXT_STYLES = [
  { label: "Normal Text", element: "span", className: "grow", shortcut: ["mod", "alt", "0"] },
  {
    label: "Heading 1",
    element: "h1",
    level: 1,
    className: "m-0 grow text-3xl font-extrabold",
    shortcut: ["mod", "alt", "1"]
  },
  {
    label: "Heading 2",
    element: "h2",
    level: 2,
    className: "m-0 grow text-xl font-bold",
    shortcut: ["mod", "alt", "2"]
  },
  {
    label: "Heading 3",
    element: "h3",
    level: 3,
    className: "m-0 grow text-lg font-semibold",
    shortcut: ["mod", "alt", "3"]
  },
  {
    label: "Heading 4",
    element: "h4",
    level: 4,
    className: "m-0 grow text-base font-semibold",
    shortcut: ["mod", "alt", "4"]
  },
  {
    label: "Heading 5",
    element: "h5",
    level: 5,
    className: "m-0 grow text-sm font-normal",
    shortcut: ["mod", "alt", "5"]
  },
  {
    label: "Heading 6",
    element: "h6",
    level: 6,
    className: "m-0 grow text-sm font-normal",
    shortcut: ["mod", "alt", "6"]
  }
];
const SectionOne = ({ editor }) => {
  const handleStyleChange = (level) => {
    if (level) {
      editor.chain().focus().toggleHeading({ level }).run();
    } else {
      editor.chain().focus().setParagraph().run();
    }
  };
  const renderMenuItem = ({ label, element: Element, level, className, shortcut }) => /* @__PURE__ */ jsxs(
    DropdownMenuItem,
    {
      onClick: () => handleStyleChange(level),
      className: cn("flex flex-row items-center justify-between gap-4", {
        "bg-accent": level ? editor.isActive("heading", { level }) : editor.isActive("paragraph")
      }),
      "aria-label": label,
      children: [
        /* @__PURE__ */ jsx(Element, { className, children: label }),
        /* @__PURE__ */ jsx(ShortcutKey, { keys: shortcut })
      ]
    },
    label
  );
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      ToolbarButton,
      {
        isActive: editor.isActive("heading"),
        tooltip: "Text styles",
        "aria-label": "Text styles",
        pressed: editor.isActive("heading"),
        className: "w-12",
        disabled: editor.isActive("codeBlock"),
        children: [
          /* @__PURE__ */ jsx(LetterCaseCapitalizeIcon, { className: "size-5" }),
          /* @__PURE__ */ jsx(CaretDownIcon, { className: "size-5" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(DropdownMenuContent, { align: "start", className: "w-full", onCloseAutoFocus: (event) => event.preventDefault(), children: TEXT_STYLES.map(renderMenuItem) })
  ] });
};

const formatActions = [
  {
    label: "Bold",
    icon: /* @__PURE__ */ jsx(FontBoldIcon, { className: "size-5" }),
    action: (editor) => editor.chain().focus().toggleBold().run(),
    isActive: (editor) => editor.isActive("bold"),
    canExecute: (editor) => editor.can().chain().focus().toggleBold().run() && !editor.isActive("codeBlock")
  },
  {
    label: "Italic",
    icon: /* @__PURE__ */ jsx(FontItalicIcon, { className: "size-5" }),
    action: (editor) => editor.chain().focus().toggleItalic().run(),
    isActive: (editor) => editor.isActive("italic"),
    canExecute: (editor) => editor.can().chain().focus().toggleItalic().run() && !editor.isActive("codeBlock")
  },
  {
    label: "Strikethrough",
    action: (editor) => editor.chain().focus().toggleStrike().run(),
    isActive: (editor) => editor.isActive("strike"),
    canExecute: (editor) => editor.can().chain().focus().toggleStrike().run() && !editor.isActive("codeBlock"),
    shortcut: ["mod", "shift", "S"]
  },
  {
    label: "Code",
    action: (editor) => editor.chain().focus().toggleCode().run(),
    isActive: (editor) => editor.isActive("code"),
    canExecute: (editor) => editor.can().chain().focus().toggleCode().run() && !editor.isActive("codeBlock"),
    shortcut: ["mod", "E"]
  },
  {
    label: "Clear formatting",
    action: (editor) => editor.chain().focus().unsetAllMarks().run(),
    isActive: () => false,
    canExecute: (editor) => editor.can().chain().focus().unsetAllMarks().run() && !editor.isActive("codeBlock"),
    shortcut: ["mod", "\\"]
  }
];
const SectionTwo = ({ editor }) => {
  const mainActions = formatActions.slice(0, 2);
  const dropdownActions = formatActions.slice(2);
  const renderToolbarButton = (action) => /* @__PURE__ */ jsx(
    ToolbarButton,
    {
      onClick: () => action.action(editor),
      disabled: !action.canExecute(editor),
      isActive: action.isActive(editor),
      tooltip: action.label,
      "aria-label": action.label,
      children: action.icon
    },
    action.label
  );
  const renderDropdownMenuItem = (action) => /* @__PURE__ */ jsxs(
    DropdownMenuItem,
    {
      onClick: () => action.action(editor),
      disabled: !action.canExecute(editor),
      className: cn("flex flex-row items-center justify-between gap-4", { "bg-accent": action.isActive(editor) }),
      "aria-label": action.label,
      children: [
        /* @__PURE__ */ jsx("span", { className: "grow", children: action.label }),
        action.shortcut && /* @__PURE__ */ jsx(ShortcutKey, { keys: action.shortcut })
      ]
    },
    action.label
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    mainActions.map(renderToolbarButton),
    /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
        ToolbarButton,
        {
          isActive: dropdownActions.some((action) => action.isActive(editor)),
          tooltip: "More formatting",
          "aria-label": "More formatting",
          children: /* @__PURE__ */ jsx(DotsHorizontalIcon, { className: "size-5" })
        }
      ) }),
      /* @__PURE__ */ jsx(DropdownMenuContent, { align: "start", className: "w-full", onCloseAutoFocus: (event) => event.preventDefault(), children: dropdownActions.map(renderDropdownMenuItem) })
    ] })
  ] });
};

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default"
});
const ToggleGroup = React.forwardRef(({ className, variant, size, children, ...props }, ref) => /* @__PURE__ */ jsx(
  ToggleGroupPrimitive.Root,
  {
    ref,
    className: cn("flex items-center justify-center gap-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ToggleGroupContext.Provider, { value: { variant, size }, children })
  }
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
const ToggleGroupItem = React.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsx(
    ToggleGroupPrimitive.Item,
    {
      ref,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        className
      ),
      ...props,
      children
    }
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  React.useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);
    const handleChange = (e) => {
      const newDarkMode = e.matches;
      setIsDarkMode(newDarkMode);
    };
    darkModeMediaQuery.addEventListener("change", handleChange);
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  return isDarkMode;
};

const COLORS = [
  {
    label: "Palette 1",
    inverse: "hsl(var(--background))",
    colors: [
      { cssVar: "hsl(var(--foreground))", label: "Default" },
      { cssVar: "var(--mt-accent-bold-blue)", label: "Bold blue" },
      { cssVar: "var(--mt-accent-bold-teal)", label: "Bold teal" },
      { cssVar: "var(--mt-accent-bold-green)", label: "Bold green" },
      { cssVar: "var(--mt-accent-bold-orange)", label: "Bold orange" },
      { cssVar: "var(--mt-accent-bold-red)", label: "Bold red" },
      { cssVar: "var(--mt-accent-bold-purple)", label: "Bold purple" }
    ]
  },
  {
    label: "Palette 2",
    inverse: "hsl(var(--background))",
    colors: [
      { cssVar: "var(--mt-accent-gray)", label: "Gray" },
      { cssVar: "var(--mt-accent-blue)", label: "Blue" },
      { cssVar: "var(--mt-accent-teal)", label: "Teal" },
      { cssVar: "var(--mt-accent-green)", label: "Green" },
      { cssVar: "var(--mt-accent-orange)", label: "Orange" },
      { cssVar: "var(--mt-accent-red)", label: "Red" },
      { cssVar: "var(--mt-accent-purple)", label: "Purple" }
    ]
  },
  {
    label: "Palette 3",
    inverse: "hsl(var(--foreground))",
    colors: [
      { cssVar: "hsl(var(--background))", label: "White", darkLabel: "Black" },
      { cssVar: "var(--mt-accent-blue-subtler)", label: "Blue subtle" },
      { cssVar: "var(--mt-accent-teal-subtler)", label: "Teal subtle" },
      { cssVar: "var(--mt-accent-green-subtler)", label: "Green subtle" },
      { cssVar: "var(--mt-accent-yellow-subtler)", label: "Yellow subtle" },
      { cssVar: "var(--mt-accent-red-subtler)", label: "Red subtle" },
      { cssVar: "var(--mt-accent-purple-subtler)", label: "Purple subtle" }
    ]
  }
];
const MemoizedColorButton = React.memo(({ color, isSelected, inverse, onClick }) => {
  const isDarkMode = useTheme();
  const label = isDarkMode && color.darkLabel ? color.darkLabel : color.label;
  return /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
      ToggleGroupItem,
      {
        className: "relative size-7 rounded-md p-0",
        value: color.cssVar,
        "aria-label": label,
        style: { backgroundColor: color.cssVar },
        onClick: (e) => {
          e.preventDefault();
          onClick(color.cssVar);
        },
        children: isSelected && /* @__PURE__ */ jsx(CheckIcon, { className: "absolute inset-0 m-auto size-6", style: { color: inverse } })
      }
    ) }),
    /* @__PURE__ */ jsx(TooltipContent, { side: "bottom", children: /* @__PURE__ */ jsx("p", { children: label }) })
  ] }) });
});
MemoizedColorButton.displayName = "MemoizedColorButton";
const MemoizedColorPicker = React.memo(({ palette, selectedColor, inverse, onColorChange }) => /* @__PURE__ */ jsx(
  ToggleGroup,
  {
    type: "single",
    value: selectedColor,
    onValueChange: (value) => {
      if (value) onColorChange(value);
    },
    className: "gap-1.5",
    children: palette.colors.map((color, index) => /* @__PURE__ */ jsx(
      MemoizedColorButton,
      {
        inverse,
        color,
        isSelected: selectedColor === color.cssVar,
        onClick: onColorChange
      },
      index
    ))
  }
));
MemoizedColorPicker.displayName = "MemoizedColorPicker";
const SectionThree = ({ editor }) => {
  const color = editor.getAttributes("textStyle")?.color || "hsl(var(--foreground))";
  const [selectedColor, setSelectedColor] = React.useState(color);
  const handleColorChange = React.useCallback(
    (value) => {
      setSelectedColor(value);
      editor.chain().setColor(value).run();
    },
    [editor]
  );
  React.useEffect(() => {
    setSelectedColor(color);
  }, [color]);
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(ToolbarButton, { tooltip: "Text color", "aria-label": "Text color", className: "w-12", children: [
      /* @__PURE__ */ jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "size-5",
          style: { color: selectedColor },
          children: [
            /* @__PURE__ */ jsx("path", { d: "M4 20h16" }),
            /* @__PURE__ */ jsx("path", { d: "m6 16 6-12 6 12" }),
            /* @__PURE__ */ jsx("path", { d: "M8 12h8" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(CaretDownIcon, { className: "size-5" })
    ] }) }),
    /* @__PURE__ */ jsx(PopoverContent, { align: "start", className: "w-full", onCloseAutoFocus: (event) => event.preventDefault(), children: /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: COLORS.map((palette, index) => /* @__PURE__ */ jsx(
      MemoizedColorPicker,
      {
        palette,
        inverse: palette.inverse,
        selectedColor,
        onColorChange: handleColorChange
      },
      index
    )) }) })
  ] });
};
SectionThree.displayName = "SectionThree";

const listItems = [
  {
    label: "Numbered list",
    isActive: (editor) => editor.isActive("orderedList"),
    onClick: (editor) => editor.chain().focus().toggleOrderedList().run(),
    shortcutKeys: ["mod", "shift", "7"]
  },
  {
    label: "Bullet list",
    isActive: (editor) => editor.isActive("bulletList"),
    onClick: (editor) => editor.chain().focus().toggleBulletList().run(),
    shortcutKeys: ["mod", "shift", "8"]
  }
];
const SectionFour = ({ editor }) => {
  const isAnyListActive = listItems.some((item) => item.isActive(editor));
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(ToolbarButton, { isActive: isAnyListActive, tooltip: "Lists", "aria-label": "Lists", className: "w-12", children: [
      /* @__PURE__ */ jsx(ListBulletIcon, { className: "size-5" }),
      /* @__PURE__ */ jsx(CaretDownIcon, { className: "size-5" })
    ] }) }),
    /* @__PURE__ */ jsx(DropdownMenuContent, { align: "start", className: "w-full", onCloseAutoFocus: (event) => event.preventDefault(), children: listItems.map((item) => /* @__PURE__ */ jsxs(
      DropdownMenuItem,
      {
        onClick: () => item.onClick(editor),
        className: cn("flex flex-row items-center justify-between gap-4", { "bg-accent": item.isActive(editor) }),
        "aria-label": item.label,
        children: [
          /* @__PURE__ */ jsx("span", { className: "grow", children: item.label }),
          /* @__PURE__ */ jsx(ShortcutKey, { keys: item.shortcutKeys })
        ]
      },
      item.label
    )) })
  ] });
};

const LinkEditBlock = ({ editor, onSetLink, close, className, ...props }) => {
  const formRef = React.useRef(null);
  const [field, setField] = React.useState({
    url: "",
    text: "",
    openInNewTab: false
  });
  const data = React.useMemo(() => {
    const { href, target } = editor.getAttributes("link");
    const { from, to } = editor.state.selection;
    const text = editor.state.doc.textBetween(from, to, " ");
    return {
      url: href,
      text,
      openInNewTab: target === "_blank" ? true : false
    };
  }, [editor]);
  React.useEffect(() => {
    setField(data);
  }, [data]);
  const handleClick = (e) => {
    e.preventDefault();
    if (formRef.current) {
      const isValid = Array.from(formRef.current.querySelectorAll("input")).every((input) => input.checkValidity());
      if (isValid) {
        onSetLink(field);
        close?.();
      } else {
        formRef.current.querySelectorAll("input").forEach((input) => {
          if (!input.checkValidity()) {
            input.reportValidity();
          }
        });
      }
    }
  };
  return /* @__PURE__ */ jsx("div", { ref: formRef, children: /* @__PURE__ */ jsxs("div", { className: cn("space-y-4", className), ...props, children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsx(Label, { children: "Link" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "url",
          required: true,
          placeholder: "Paste a link",
          value: field.url ?? "",
          onChange: (e) => setField({ ...field, url: e.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsx(Label, { children: "Display text (optional)" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "text",
          placeholder: "Text to display",
          value: field.text ?? "",
          onChange: (e) => setField({ ...field, text: e.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx(Label, { children: "Open in new tab" }),
      /* @__PURE__ */ jsx(
        Switch,
        {
          checked: field.openInNewTab,
          onCheckedChange: (checked) => setField({ ...field, openInNewTab: checked })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end space-x-2", children: [
      close && /* @__PURE__ */ jsx(Button, { variant: "ghost", type: "button", onClick: close, children: "Cancel" }),
      /* @__PURE__ */ jsx(Button, { type: "button", onClick: handleClick, children: "Insert" })
    ] })
  ] }) });
};

const LinkEditPopover = ({ editor }) => {
  const [open, setOpen] = React.useState(false);
  const onSetLink = (props) => {
    setLink(editor, props);
    editor.commands.enter();
  };
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
      ToolbarButton,
      {
        isActive: editor.isActive("link"),
        tooltip: "Link",
        "aria-label": "Insert link",
        disabled: editor.isActive("codeBlock"),
        children: /* @__PURE__ */ jsx(Link2Icon, { className: "size-5" })
      }
    ) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-full min-w-80", align: "start", side: "bottom", children: /* @__PURE__ */ jsx(LinkEditBlock, { editor, close: () => setOpen(false), onSetLink }) })
  ] });
};

const ImageEditBlock = ({ editor, className, close, ...props }) => {
  const fileInputRef = useRef(null);
  const [link, setLink] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    fileInputRef.current?.click();
  };
  const handleLink = () => {
    editor.chain().focus().setImage({ src: link }).run();
    close();
  };
  const handleFile = (e) => {
    const files = e.target.files;
    if (!files) return;
    const reader = new FileReader();
    reader.onload = (e2) => {
      const src = e2.target?.result;
      editor.chain().setImage({ src }).focus().run();
    };
    reader.readAsDataURL(files[0]);
    close();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLink();
  };
  return /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxs("div", { className: cn("space-y-6", className), ...props, children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsx(Label, { children: "Attach an image link" }),
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "url",
            required: true,
            placeholder: "https://example.com",
            value: link,
            className: "grow",
            onChange: (e) => setLink(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "ml-2 inline-block", children: "Submit" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Button, { className: "w-full", onClick: handleClick, children: "Upload from your computer" }),
    /* @__PURE__ */ jsx("input", { type: "file", accept: "image/*", ref: fileInputRef, multiple: true, className: "hidden", onChange: handleFile })
  ] }) });
};

const ImageEditDialog = ({ editor }) => {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(ToolbarButton, { isActive: editor.isActive("image"), tooltip: "Image", "aria-label": "Image", children: /* @__PURE__ */ jsx(ImageIcon, { className: "size-5" }) }) }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-lg", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Select image" }),
        /* @__PURE__ */ jsx(DialogDescription, { className: "sr-only", children: "Upload an image from your computer" })
      ] }),
      /* @__PURE__ */ jsx(ImageEditBlock, { editor, close: () => setOpen(false) })
    ] })
  ] });
};

const insertElements = [
  {
    label: "Code block",
    icon: /* @__PURE__ */ jsx(CodeIcon, { className: "mr-2 size-4" }),
    action: (editor) => editor.chain().focus().toggleCodeBlock().run(),
    isActive: (editor) => editor.isActive("codeBlock"),
    shortcut: ["mod", "alt", "C"]
  },
  {
    label: "Blockquote",
    icon: /* @__PURE__ */ jsx(QuoteIcon, { className: "mr-2 size-4" }),
    action: (editor) => editor.chain().focus().toggleBlockquote().run(),
    isActive: (editor) => editor.isActive("blockquote"),
    shortcut: ["mod", "shift", "B"]
  },
  {
    label: "Divider",
    icon: /* @__PURE__ */ jsx(DividerHorizontalIcon, { className: "mr-2 size-4" }),
    action: (editor) => editor.chain().focus().setHorizontalRule().run(),
    shortcut: ["mod", "alt", "-"]
  }
];
const SectionFive = ({ editor }) => {
  const isAnyElementActive = insertElements.some((element) => element.isActive?.(editor));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(LinkEditPopover, { editor }),
    /* @__PURE__ */ jsx(ImageEditDialog, { editor }),
    /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
        ToolbarButton,
        {
          isActive: isAnyElementActive,
          tooltip: "Insert elements",
          "aria-label": "Insert elements",
          className: "w-12",
          children: [
            /* @__PURE__ */ jsx(PlusIcon, { className: "size-5" }),
            /* @__PURE__ */ jsx(CaretDownIcon, { className: "size-5" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(DropdownMenuContent, { align: "start", className: "w-full", onCloseAutoFocus: (event) => event.preventDefault(), children: insertElements.map((element) => /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          onClick: () => element.action(editor),
          className: cn("flex flex-row items-center justify-between gap-4", {
            "bg-accent": element.isActive?.(editor)
          }),
          children: [
            /* @__PURE__ */ jsxs("span", { className: "flex grow items-center", children: [
              element.icon,
              element.label
            ] }),
            element.shortcut && /* @__PURE__ */ jsx(ShortcutKey, { keys: element.shortcut })
          ]
        },
        element.label
      )) })
    ] })
  ] });
};

const LinkPopoverBlock = ({
  link,
  onClear,
  onEdit
}) => {
  const [copyTitle, setCopyTitle] = useState("Copy");
  const handleCopy = (e) => {
    e.preventDefault();
    setCopyTitle("Copied!");
    navigator.clipboard.writeText(link.href);
    setTimeout(() => {
      setCopyTitle("Copy");
    }, 1e3);
  };
  return /* @__PURE__ */ jsx("div", { className: "flex h-10 overflow-hidden rounded bg-background p-2 shadow-lg", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1", children: [
    /* @__PURE__ */ jsx(ToolbarButton, { tooltip: "Edit link", onClick: onEdit, className: "w-auto px-2", children: "Edit link" }),
    /* @__PURE__ */ jsx(Separator, { orientation: "vertical" }),
    /* @__PURE__ */ jsx(ToolbarButton, { tooltip: "Open link in a new tab", onClick: () => window.open(link.href, "_blank"), children: /* @__PURE__ */ jsx(ExternalLinkIcon, { className: "size-4" }) }),
    /* @__PURE__ */ jsx(Separator, { orientation: "vertical" }),
    /* @__PURE__ */ jsx(ToolbarButton, { tooltip: "Clear link", onClick: onClear, children: /* @__PURE__ */ jsx(ScissorsLineDashed, { className: "size-4" }) }),
    /* @__PURE__ */ jsx(Separator, { orientation: "vertical" }),
    /* @__PURE__ */ jsx(
      ToolbarButton,
      {
        tooltip: copyTitle,
        onClick: handleCopy,
        tooltipOptions: {
          onPointerDownOutside: (e) => {
            if (e.target === e.currentTarget) e.preventDefault();
          }
        },
        children: /* @__PURE__ */ jsx(CopyIcon, { className: "size-4" })
      }
    )
  ] }) });
};

const LinkBubbleMenu = ({ editor }) => {
  const [showEdit, setShowEdit] = useState(false);
  const shouldShow = ({ editor: editor2, from, to }) => {
    if (from === to) {
      return false;
    }
    const link = editor2.getAttributes("link");
    if (link.href) {
      return true;
    }
    return false;
  };
  const unSetLink = () => {
    editor.chain().extendMarkRange("link").unsetLink().focus().run();
    setShowEdit(false);
  };
  function onSetLink(props) {
    setLink(editor, props);
    setShowEdit(false);
  }
  return /* @__PURE__ */ jsx(
    BubbleMenu,
    {
      editor,
      shouldShow,
      tippyOptions: {
        placement: "bottom-start",
        onHidden: () => {
          setShowEdit(false);
        }
      },
      children: showEdit ? /* @__PURE__ */ jsx(
        LinkEditBlock,
        {
          onSetLink,
          editor,
          className: "w-full min-w-80 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none"
        }
      ) : /* @__PURE__ */ jsx(LinkPopoverBlock, { onClear: unSetLink, link: editor.getAttributes("link"), onEdit: () => setShowEdit(true) })
    }
  );
};

const ImagePopoverBlock = ({ onRemove }) => {
  const handleRemove = (e) => {
    e.preventDefault();
    onRemove(e);
  };
  return /* @__PURE__ */ jsx("div", { className: "flex h-10 overflow-hidden rounded bg-background p-2 shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-1", children: /* @__PURE__ */ jsx(ToolbarButton, { tooltip: "Remove", onClick: handleRemove, children: /* @__PURE__ */ jsx(TrashIcon, { className: "size-4" }) }) }) });
};

const ImageBubbleMenu = ({ editor }) => {
  const shouldShow = ({ editor: editor2, from, to }) => {
    if (from === to) {
      return false;
    }
    const img = editor2.getAttributes("image");
    if (img.src) {
      return true;
    }
    return false;
  };
  const unSetImage = () => {
    editor.commands.deleteSelection();
  };
  return /* @__PURE__ */ jsx(
    BubbleMenu,
    {
      editor,
      shouldShow,
      tippyOptions: {
        placement: "bottom",
        offset: [0, 8]
      },
      children: /* @__PURE__ */ jsx(ImagePopoverBlock, { onRemove: unSetImage })
    }
  );
};

const CodeBlockLowlight = CodeBlockLowlight$1.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      lowlight: createLowlight(common),
      defaultLanguage: null,
      HTMLAttributes: {
        class: "block-node"
      }
    };
  }
});

const Color = Color$1.extend({
  addProseMirrorPlugins() {
    return [
      ...this.parent?.() || [],
      new Plugin({
        props: {
          handleKeyDown: (_, event) => {
            if (event.key === "Enter") {
              this.editor.commands.unsetColor();
            }
            return false;
          }
        }
      })
    ];
  }
});

const HorizontalRule = HorizontalRule$1.extend({
  addKeyboardShortcuts() {
    return {
      "Mod-Alt--": () => this.editor.commands.insertContent({
        type: this.name
      })
    };
  }
});

const useImageLoad = (src) => {
  const [imgSize, setImgSize] = React.useState({ width: 0, height: 0 });
  React.useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSize({ width: img.width, height: img.height });
    };
  }, [src]);
  return imgSize;
};

const ImageViewBlock = ({ editor, node, getPos }) => {
  const imgSize = useImageLoad(node.attrs.src);
  const paddingBottom = useMemo(() => {
    if (!imgSize.width || !imgSize.height) {
      return 0;
    }
    return imgSize.height / imgSize.width * 100;
  }, [imgSize.width, imgSize.height]);
  return /* @__PURE__ */ jsx(NodeViewWrapper, { children: /* @__PURE__ */ jsx("div", { draggable: true, "data-drag-handle": true, children: /* @__PURE__ */ jsx("figure", { children: /* @__PURE__ */ jsx("div", { className: "relative w-full", style: { paddingBottom: `${isNumber(paddingBottom) ? paddingBottom : 0}%` }, children: /* @__PURE__ */ jsx("div", { className: "absolute h-full w-full", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("relative h-full max-h-full w-full max-w-full rounded transition-all"),
      style: {
        boxShadow: editor.state.selection.from === getPos() ? "0 0 0 1px hsl(var(--primary))" : "none"
      },
      children: /* @__PURE__ */ jsx("div", { className: "relative flex h-full max-h-full w-full max-w-full overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          alt: node.attrs.alt,
          src: node.attrs.src,
          className: "absolute left-2/4 top-2/4 m-0 h-full max-w-full -translate-x-2/4 -translate-y-2/4 transform object-contain"
        }
      ) })
    }
  ) }) }) }) }) });
};

const Image$1 = Image$2.extend({
  addNodeView() {
    return ReactNodeViewRenderer(ImageViewBlock);
  }
});

const Link = TiptapLink.extend({
  /*
   * Determines whether typing next to a link automatically becomes part of the link.
   * In this case, we dont want any characters to be included as part of the link.
   */
  inclusive: false,
  /*
   * Match all <a> elements that have an href attribute, except for:
   * - <a> elements with a data-type attribute set to button
   * - <a> elements with an href attribute that contains 'javascript:'
   */
  parseHTML() {
    return [{ tag: 'a[href]:not([data-type="button"]):not([href *= "javascript:" i])' }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["a", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addOptions() {
    return {
      ...this.parent?.(),
      openOnClick: false,
      HTMLAttributes: {
        class: "link"
      }
    };
  },
  addProseMirrorPlugins() {
    const { editor } = this;
    return [
      ...this.parent?.() || [],
      new Plugin({
        props: {
          handleKeyDown: (_, event) => {
            const { selection } = editor.state;
            if (event.key === "Escape" && selection.empty !== true) {
              editor.commands.focus(selection.to, { scrollIntoView: false });
            }
            return false;
          },
          handleClick(view, pos) {
            const { schema, doc, tr } = view.state;
            const range = getMarkRange(doc.resolve(pos), schema.marks.link);
            if (!range) {
              return;
            }
            const { from, to } = range;
            const start = Math.min(from, to);
            const end = Math.max(from, to);
            if (pos < start || pos > end) {
              return;
            }
            const $start = doc.resolve(start);
            const $end = doc.resolve(end);
            const transaction = tr.setSelection(new TextSelection($start, $end));
            view.dispatch(transaction);
          }
        }
      })
    ];
  }
});

const Selection = Extension.create({
  name: "selection",
  addProseMirrorPlugins() {
    const { editor } = this;
    return [
      new Plugin({
        key: new PluginKey("selection"),
        props: {
          decorations(state) {
            if (state.selection.empty) {
              return null;
            }
            if (editor.isFocused === true) {
              return null;
            }
            return DecorationSet.create(state.doc, [
              Decoration.inline(state.selection.from, state.selection.to, {
                class: "selection"
              })
            ]);
          }
        }
      })
    ];
  }
});

const UnsetAllMarks = Extension.create({
  addKeyboardShortcuts() {
    return {
      "Mod-\\": () => this.editor.commands.unsetAllMarks()
    };
  }
});

function useThrottle(callback, delay) {
  const lastRan = useRef(Date.now());
  const timeoutRef = useRef(null);
  return useCallback(
    (...args) => {
      const handler = () => {
        if (Date.now() - lastRan.current >= delay) {
          callback(...args);
          lastRan.current = Date.now();
        } else {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          timeoutRef.current = setTimeout(
            () => {
              callback(...args);
              lastRan.current = Date.now();
            },
            delay - (Date.now() - lastRan.current)
          );
        }
      };
      handler();
    },
    [callback, delay]
  );
}

const createExtensions = (placeholder) => [
  StarterKit.configure({
    horizontalRule: false,
    codeBlock: false,
    paragraph: { HTMLAttributes: { class: "text-node" } },
    heading: { HTMLAttributes: { class: "heading-node" } },
    blockquote: { HTMLAttributes: { class: "block-node" } },
    bulletList: { HTMLAttributes: { class: "list-node" } },
    orderedList: { HTMLAttributes: { class: "list-node" } },
    code: { HTMLAttributes: { class: "inline", spellcheck: "false" } },
    dropcursor: { width: 2, class: "ProseMirror-dropcursor border" }
  }),
  Link,
  Image$1,
  Color,
  TextStyle,
  Selection,
  Typography,
  UnsetAllMarks,
  HorizontalRule,
  CodeBlockLowlight,
  Placeholder.configure({ placeholder: () => placeholder })
];
const useMinimalTiptapEditor = ({
  value,
  output = "html",
  placeholder = "",
  editorClassName,
  throttleDelay = 1e3,
  onUpdate,
  onBlur,
  ...props
}) => {
  const throttledSetValue = useThrottle((value2) => onUpdate?.(value2), throttleDelay);
  const handleUpdate = React.useCallback(
    (editor2) => throttledSetValue(getOutput(editor2, output)),
    [output, throttledSetValue]
  );
  const handleCreate = React.useCallback(
    (editor2) => {
      if (value && editor2.isEmpty) {
        editor2.commands.setContent(value);
      }
    },
    [value]
  );
  const handleBlur = React.useCallback((editor2) => onBlur?.(getOutput(editor2, output)), [output, onBlur]);
  const editor = useEditor({
    extensions: createExtensions(placeholder),
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        class: cn("focus:outline-none", editorClassName)
      }
    },
    onUpdate: ({ editor: editor2 }) => handleUpdate(editor2),
    onCreate: ({ editor: editor2 }) => handleCreate(editor2),
    onBlur: ({ editor: editor2 }) => handleBlur(editor2),
    ...props
  });
  return editor;
};

const Toolbar = ({ editor }) => /* @__PURE__ */ jsx("div", { className: "border-b border-border p-2", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-wrap items-center", children: [
  /* @__PURE__ */ jsx(SectionOne, { editor }),
  /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mx-2 h-7" }),
  /* @__PURE__ */ jsx(SectionTwo, { editor }),
  /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mx-2 h-7" }),
  /* @__PURE__ */ jsx(SectionThree, { editor }),
  /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mx-2 h-7" }),
  /* @__PURE__ */ jsx(SectionFour, { editor }),
  /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mx-2 h-7" }),
  /* @__PURE__ */ jsx(SectionFive, { editor })
] }) });
const MinimalTiptapEditor = React.forwardRef(
  ({ value, onChange, className, editorContentClassName, ...props }, ref) => {
    const editor = useMinimalTiptapEditor({
      value,
      onUpdate: onChange,
      ...props
    });
    const handleClick = () => {
      if (editor && !editor?.isFocused) {
        editor?.chain().focus().run();
      }
    };
    if (!editor) {
      return null;
    }
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "flex h-auto min-h-72 w-full flex-col rounded-md border border-input shadow-sm focus-within:border-primary",
          className
        ),
        children: [
          /* @__PURE__ */ jsx(Toolbar, { editor }),
          /* @__PURE__ */ jsx("div", { className: "h-full grow", onClick: handleClick, children: /* @__PURE__ */ jsx(EditorContent, { editor, className: cn("minimal-tiptap-editor p-5", editorContentClassName) }) }),
          /* @__PURE__ */ jsx(LinkBubbleMenu, { editor }),
          /* @__PURE__ */ jsx(ImageBubbleMenu, { editor })
        ]
      }
    );
  }
);
MinimalTiptapEditor.displayName = "MinimalTiptapEditor";

export { MinimalTiptapEditor };
