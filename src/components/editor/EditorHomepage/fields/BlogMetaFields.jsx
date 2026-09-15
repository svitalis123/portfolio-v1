import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import TokenListField from './TokenListField';

/** Everything on the compose form except the title and the rich-text body. */
const BlogMetaFields = ({ blogData, setField, addToList, removeFromList }) => (
  <>
    <div>
      <Label htmlFor="excerpt">Excerpt</Label>
      <Textarea
        id="excerpt"
        value={blogData.excerpt}
        onChange={(event) => setField('excerpt', event.target.value)}
        placeholder="Enter a brief excerpt"
        rows={3}
      />
    </div>

    <div className="flex gap-4">
      <TokenListField
        id="tags"
        label="Tags"
        values={blogData.tags}
        onAdd={(value) => addToList('tags', value)}
        onRemove={(index) => removeFromList('tags', index)}
      />
      <TokenListField
        id="categories"
        label="Categories"
        values={blogData.categories}
        onAdd={(value) => addToList('categories', value)}
        onRemove={(index) => removeFromList('categories', index)}
      />
    </div>

    <div className="flex gap-4">
      <div className="flex-1">
        <Label htmlFor="author">Author</Label>
        <Input
          id="author"
          value={blogData.author}
          onChange={(event) => setField('author', event.target.value)}
          placeholder="Enter author name"
          required
        />
      </div>

      <div className="flex-1">
        <Label htmlFor="publishDate">Publish Date</Label>
        <Input
          id="publishDate"
          type="datetime-local"
          value={blogData.publishDate}
          onChange={(event) => setField('publishDate', event.target.value)}
        />
      </div>
    </div>

    <div className="flex items-center">
      <Switch
        id="isPublished"
        checked={blogData.isPublished}
        onCheckedChange={(checked) => setField('isPublished', checked)}
      />
      <Label htmlFor="isPublished" className="ml-2">
        Publish immediately
      </Label>
    </div>

    <div>
      <Label htmlFor="seoTitle">SEO Title</Label>
      <Input
        id="seoTitle"
        value={blogData.seoTitle}
        onChange={(event) => setField('seoTitle', event.target.value)}
        placeholder="Enter SEO title"
      />
    </div>

    <div>
      <Label htmlFor="seoDescription">SEO Description</Label>
      <Textarea
        id="seoDescription"
        value={blogData.seoDescription}
        onChange={(event) => setField('seoDescription', event.target.value)}
        placeholder="Enter SEO description"
        rows={3}
      />
    </div>
  </>
);

export default BlogMetaFields;
