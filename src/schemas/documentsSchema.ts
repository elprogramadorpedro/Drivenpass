import Joi from "joi";
import { CreateDocumentData } from "../repositories/documentsRepository";

export const createDocumentSchema = Joi.object<CreateDocumentData>({
  title: Joi.string().required(),
  number: Joi.string()
    .required()
    .pattern(/^\d{10}$/),
  type: Joi.string().required().valid("RG", "CNH"),
  completeName: Joi.string()
    .required()
    .pattern(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/),
  emissionDate: Joi.string()
    .required()
    .pattern(
      /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/
    ),
  expirationDate: Joi.string()
    .required()
    .pattern(
      /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/
    ),
  issuingBody: Joi.string().required(),
});
