import { Request, Response } from "express";
import { CreateCredentialData } from "../repositories/credentialsRepository.js";
import {
  createCredentialService,
  getCredentialsService,
  UserToken,
} from "../services/credentialsService.js";

export async function createCredential(req: Request, res: Response) {
  const credentialData: CreateCredentialData = req.body;
  const user: UserToken = res.locals.user;
  await createCredentialService(credentialData, user);
  res.sendStatus(201);
}

export async function getCredentials(req: Request, res: Response) {
  const user: UserToken = res.locals.user;
  let id;
  if (req.query && req.query.id) {
    id = (req.query as any).id;
  }

  if (id) {
    console.log("entrou");
    const credential = await getCredentialsService(user, parseInt(id));
    res.status(200).send(credential);
  } else {
    const credentials = await getCredentialsService(user);
    console.log(credentials);
    res.status(200).send(credentials);
  }
}