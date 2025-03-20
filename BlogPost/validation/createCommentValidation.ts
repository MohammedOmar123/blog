import joi from "joi";
import { CreateOrUpdateCommentInterface } from "../interfaces";

const createOrUpdateCommentValidation = (body: CreateOrUpdateCommentInterface) => {
  const schema = joi.object({
    content: joi.string().required(),
  });

  return schema.validateAsync(body);
};

export default createOrUpdateCommentValidation;
