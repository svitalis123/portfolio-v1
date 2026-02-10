/* empty css                         */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_BOClSVLC.mjs';
import 'piccolore';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { lazy, useState, Suspense } from 'react';
import { c as cn, L as Label, I as Input, T as Textarea, B as Button, $ as $$Layout } from './Layout_CRylQ-Au.mjs';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { X } from 'lucide-react';
import { format } from 'date-fns';
import '../renderers.mjs';

const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#31ac54] data-[state=unchecked]:bg-[#5a4d44]",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

const MinimalTiptapEditor = lazy(() => import('./index_DJyLgBpi.mjs').then((mod) => ({ default: mod.MinimalTiptapEditor })));
const EnhancedBlogUpload = () => {
  const { toast } = useToast();
  const initialBlogData = {
    title: "",
    content: "",
    excerpt: "",
    tags: [],
    categories: [],
    author: "",
    publishDate: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd'T'HH:mm"),
    isPublished: false,
    seoTitle: "",
    seoDescription: ""
  };
  const [blogData, setBlogData] = useState(initialBlogData);
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (field, value) => {
    setBlogData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };
  const handleTagInput = (e, field) => {
    e.preventDefault();
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setBlogData((prevData) => ({
        ...prevData,
        [field]: [...prevData[field], e.target.value.trim()]
      }));
      e.target.value = "";
    }
  };
  const removeItem = (field, indexToRemove) => {
    setBlogData((prevData) => ({
      ...prevData,
      [field]: prevData[field].filter((_, index) => index !== indexToRemove)
    }));
  };
  const resetForm = () => {
    setBlogData({
      ...initialBlogData,
      publishDate: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd'T'HH:mm")
      // Reset to current date/time
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/upload-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(blogData)
      });
      if (response.ok) {
        toast({
          title: "Success!",
          description: "Blog post uploaded successfully.",
          variant: "success"
        });
        resetForm();
      } else {
        const errorData = await response.json();
        toast({
          title: "Error",
          description: errorData.message || "Failed to upload blog post. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
      console.error("Error uploading blog post:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && (e.target.id === "tags" || e.target.id === "categories")) {
      e.preventDefault();
    }
  };
  return /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, onKeyPress: handleKeyPress, className: "bg-primary p-6 rounded-lg shadow-lg max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "Title" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "title",
          value: blogData.title,
          onChange: (e) => handleInputChange("title", e.target.value),
          placeholder: "Enter blog title",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "content", children: "Content" }),
      /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("p", { children: "Loading editor..." }), children: /* @__PURE__ */ jsx(
        MinimalTiptapEditor,
        {
          value: blogData.content,
          immediatelyRender: false,
          onChange: (content) => handleInputChange("content", content),
          className: "w-full bg-white text-black rounded-md min-h-[300px]",
          editorContentClassName: "p-3",
          output: "html",
          placeholder: "Type your content here..."
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "excerpt", children: "Excerpt" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          id: "excerpt",
          value: blogData.excerpt,
          onChange: (e) => handleInputChange("excerpt", e.target.value),
          placeholder: "Enter a brief excerpt",
          rows: 3
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "tags", children: "Tags" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "tags",
            onKeyDown: (e) => handleTagInput(e, "tags"),
            placeholder: "Enter tags and press Enter"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: blogData.tags.map((tag, index) => /* @__PURE__ */ jsxs("span", { className: "bg-transparent text-white px-2 py-1 rounded-full text-sm flex items-center", children: [
          tag,
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => removeItem("tags", index),
              className: "ml-1 focus:outline-none",
              children: /* @__PURE__ */ jsx(X, { size: 14 })
            }
          )
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "categories", children: "Categories" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "categories",
            onKeyDown: (e) => handleTagInput(e, "categories"),
            placeholder: "Enter categories and press Enter"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: blogData.categories.map((category, index) => /* @__PURE__ */ jsxs("span", { className: "bg-transparent text-white px-2 py-1 rounded-full text-sm flex items-center", children: [
          category,
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => removeItem("categories", index),
              className: "ml-1 focus:outline-none",
              children: /* @__PURE__ */ jsx(X, { size: 14 })
            }
          )
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "author", children: "Author" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "author",
            value: blogData.author,
            onChange: (e) => handleInputChange("author", e.target.value),
            placeholder: "Enter author name"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "publishDate", children: "Publish Date" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "publishDate",
            type: "datetime-local",
            value: blogData.publishDate,
            onChange: (e) => handleInputChange("publishDate", e.target.value)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx(
        Switch,
        {
          id: "isPublished",
          checked: blogData.isPublished,
          onCheckedChange: (checked) => handleInputChange("isPublished", checked)
        }
      ),
      /* @__PURE__ */ jsx(Label, { htmlFor: "isPublished", className: "ml-2", children: "Publish immediately" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "seoTitle", children: "SEO Title" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "seoTitle",
          value: blogData.seoTitle,
          onChange: (e) => handleInputChange("seoTitle", e.target.value),
          placeholder: "Enter SEO title"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "seoDescription", children: "SEO Description" }),
      /* @__PURE__ */ jsx(
        Textarea,
        {
          id: "seoDescription",
          value: blogData.seoDescription,
          onChange: (e) => handleInputChange("seoDescription", e.target.value),
          placeholder: "Enter SEO description",
          rows: 3
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full bg-[#31ac54] hover:bg-[#41b963] !mb-24", disabled: isLoading, children: isLoading ? "Uploading..." : "Upload Blog Post" })
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "vitalis" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-primary text-white h-full"> ${renderComponent($$result2, "UploadBlog", EnhancedBlogUpload, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/editor/EditorHomepage/UploadBlog", "client:component-export": "default" })} </main> ` })}`;
}, "/Users/slu/Public/code folders/personal_code/portfolio-v1/src/pages/admin/index.astro", void 0);

const $$file = "/Users/slu/Public/code folders/personal_code/portfolio-v1/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { Switch as S, page as p };
