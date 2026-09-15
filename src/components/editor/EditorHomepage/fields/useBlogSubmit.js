import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const UPLOAD_ENDPOINT = '/api/admin/upload-blog';

/** Posts the composed blog to the admin endpoint and reports the outcome. */
export function useBlogSubmit({ onSuccess }) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (blogData) => {
    setIsLoading(true);

    try {
      const response = await fetch(UPLOAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData),
      });

      const payload = await response.json().catch(() => ({}));

      if (response.ok) {
        toast({ title: 'Success!', description: 'Blog post uploaded successfully.' });
        onSuccess();
        return;
      }

      const description =
        // The admin session cookie expires after 8h; say so rather than showing
        // a generic failure the author cannot act on.
        response.status === 401
          ? 'Your admin session expired. Reload the page to sign in again.'
          : // The API reports problems under `error`; the old code read `message`,
            // so every real validation message was swallowed by the fallback.
            payload.error || 'Failed to upload blog post. Please try again.';

      toast({ title: 'Error', description, variant: 'destructive' });
    } catch (error) {
      console.error('[UploadBlog] request failed', error);
      toast({
        title: 'Error',
        description: 'Could not reach the server. Check your connection and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { submit, isLoading };
}
