import instance from '../../axios';
import {
  IPatchCommentRequest,
  IPostCommentReplyRequest,
  IWriteCommentRequest,
} from '../../../models/comments/request';

export const replyComment = async ({
  attachment_file_urls,
  content,
  comment_id,
}: IPostCommentReplyRequest) => {
  try {
    await instance.post(`/comments/${comment_id}`, {
      attachment_file_urls,
      content,
    });
  } catch (err) {
    throw err;
  }
};

export const cancelCommentFix = async (comment_id: number) => {
  try {
    await instance.patch(`comments/${comment_id}/pin/cancel`);
  } catch (err) {
    throw err;
  }
};

export const commentFix = async (comment_id: number) => {
  try {
    await instance.patch(`/comments/${comment_id}/pin`);
  } catch (err) {
    throw err;
  }
};

export const reportComment = async (comment_id: number) => {
  try {
    await instance.post(`/comment/${comment_id}/report`);
  } catch (err) {
    throw err;
  }
};

export const writeComment = async ({ attachment_file_urls, content }: IWriteCommentRequest) => {
  try {
    await instance.post('/comments', { attachment_file_urls, content });
  } catch (err) {
    throw err;
  }
};

export const removeComment = async (commentId: number) => {
  try {
    await instance.post(`/comments/${commentId}`);
  } catch (err) {
    throw err;
  }
};

export const patchComment = async ({
  comment_id,
  content,
  attachment_file_urls,
}: IPatchCommentRequest) => {
  try {
    await instance.patch(`/comments/${comment_id}`, {
      content,
      attachment_file_urls,
    });
  } catch (err) {
    throw err;
  }
};
