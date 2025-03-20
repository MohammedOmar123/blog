import { Request } from "express";

interface signupInterface {
  name: string
  email: string;
  password: string;
  confirmationPassword: string;
}

interface loginInterface {
  email: string;
  password: string;
}

interface createUserInterface {
  name: string;
  email: string;
  password: string;
}

interface PayloadInterface {
  id: number;
  name: string;
  email: string;
}

// Define the shape of the request body for creating a post
 interface CreatePostInterface {
  title: string;
  content?: string;
  published?: boolean;
  authorId: number ;
}

// Extend Express Request to include an optional `user` and a generic body type
 interface IRequest<T = any> extends Request {
  user?: PayloadInterface;
  body: T;
}

interface UpdatePostInterface {
  title?: string;
  content?: string;
  published?: boolean;
}

interface PostQuery {
  search?: string;
  sortField?: "createdAt" | "updatedAt";
  sortOrder?: "asc" | "desc";
}

interface CreateCommentInterface {
  content: string;
  postId: number;
  authorId: number;
}

interface UpdateCommentInterface {
  content?: string;
}

export {
  signupInterface,
  loginInterface,
  createUserInterface,
  PayloadInterface,
  CreatePostInterface,
  IRequest,
  UpdatePostInterface,
  PostQuery,
  CreateCommentInterface,
  UpdateCommentInterface,
};