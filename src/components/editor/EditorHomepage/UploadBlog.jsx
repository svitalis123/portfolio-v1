import { lazy, Suspense } from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useBlogForm } from './fields/useBlogForm';
import { useBlogSubmit } from './fields/useBlogSubmit';
import BlogMetaFields from './fields/BlogMetaFields';

const MinimalTiptapEditor = lazy(() =>
  import('@/components/editor/minimal-tiptap').then((module) => ({
    default: module.MinimalTiptapEditor,
  }))
);

const EnhancedBlogUpload = () => {
  const { blogData, setField, addToList, removeFromList, reset } = useBlogForm();
  const { submit, isLoading } = useBlogSubmit({ onSuccess: reset });

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(blogData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-primary p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="space-y-6">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={blogData.title}
            onChange={(event) => setField('title', event.target.value)}
            placeholder="Enter blog title"
            required
          />
        </div>

        <div>
          <Label htmlFor="content">Content</Label>
          <Suspense fallback={<p>Loading editor...</p>}>
            <MinimalTiptapEditor
              value={blogData.content}
              immediatelyRender={false}
              onChange={(content) => setField('content', content)}
              className="w-full bg-white text-black rounded-md min-h-[300px]"
              editorContentClassName="p-3"
              output="html"
              placeholder="Type your content here..."
            />
          </Suspense>
        </div>

        <BlogMetaFields
          blogData={blogData}
          setField={setField}
          addToList={addToList}
          removeFromList={removeFromList}
        />

        <Button
          type="submit"
          className="w-full bg-[#31ac54] hover:bg-[#41b963] !mb-24"
          disabled={isLoading}
        >
          {isLoading ? 'Uploading...' : 'Upload Blog Post'}
        </Button>
      </div>
    </form>
  );
};

export default EnhancedBlogUpload;
