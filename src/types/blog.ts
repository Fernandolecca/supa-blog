export type Post = {
  title?: string;
  content?: string;
  is_published?: boolean;
  post_id?: number;
  created_by?: string;
};

export type Comment = {
  comment_id?: number;
  post_id?: number;
  content?: string;
};
