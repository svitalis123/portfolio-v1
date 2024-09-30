/* empty css                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_BUCmH-lO.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { lazy, useState, Suspense } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import { c as cn, $ as $$Layout } from './Layout_BEXIRjAl.mjs';
import { Slot } from '@radix-ui/react-slot';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { X } from 'lucide-react';
import { format } from 'date-fns';
import '../renderers.mjs';

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
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

const MinimalTiptapEditor = lazy(() => import('./index_6vI1tE3g.mjs').then((mod) => ({ default: mod.MinimalTiptapEditor })));
const EnhancedBlogUpload = () => {
  const [blogData, setBlogData] = useState({
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
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (field, value) => {
    setBlogData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };
  const handleTagInput = (e, field) => {
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
        console.log("Blog post uploaded successfully");
      } else {
        console.error("Failed to upload blog post");
      }
    } catch (error) {
      console.error("Error uploading blog post:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, className: "bg-primary p-6 rounded-lg shadow-lg max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
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
            onKeyPress: (e) => handleTagInput(e, "tags"),
            placeholder: "Enter tags and press Enter"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: blogData.tags.map((tag, index) => /* @__PURE__ */ jsxs("span", { className: "bg-secondary text-white px-2 py-1 rounded-full text-sm flex items-center", children: [
          tag,
          /* @__PURE__ */ jsx("button", { type: "button", onClick: () => removeItem("tags", index), className: "ml-1 focus:outline-none", children: /* @__PURE__ */ jsx(X, { size: 14 }) })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "categories", children: "Categories" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "categories",
            onKeyPress: (e) => handleTagInput(e, "categories"),
            placeholder: "Enter categories and press Enter"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: blogData.categories.map((category, index) => /* @__PURE__ */ jsxs("span", { className: "bg-primary text-white px-2 py-1 rounded-full text-sm flex items-center", children: [
          category,
          /* @__PURE__ */ jsx("button", { type: "button", onClick: () => removeItem("categories", index), className: "ml-1 focus:outline-none", children: /* @__PURE__ */ jsx(X, { size: 14 }) })
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
    /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full !mb-24", disabled: isLoading, children: isLoading ? "Uploading..." : "Upload Blog Post" })
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "vitalis" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-primary text-white h-full"> ${renderComponent($$result2, "UploadBlog", EnhancedBlogUpload, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/editor/EditorHomepage/UploadBlog", "client:component-export": "default" })} </main> ` })}`;
}, "/media/vitalis/E06C86256C85F696/Users/Public/Desktop/projects/portfolio/my-neumorphic-portfolio/src/pages/admin/index.astro", void 0);

const $$file = "/media/vitalis/E06C86256C85F696/Users/Public/Desktop/projects/portfolio/my-neumorphic-portfolio/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { Button as B, Input as I, Label as L, Switch as S, page as p };
