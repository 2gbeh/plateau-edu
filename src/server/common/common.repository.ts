import { TCollection, TDocument, TPrimaryKey } from "@/types/common.type";
import { CommonService } from "./common.service";
import { ApiError } from "next/dist/server/api-utils";

export class CommonRepository {
  constructor(protected data: TCollection) {}
  //
  findById(id?: TPrimaryKey) {
    const record = this.data.find((document) => document.id == id);
    if (record) return record;
    throw new ApiError(404, "CommonRepositoryError: Resource ID not found");
  }

  findIndexById(id?: TPrimaryKey) {
    return this.data.findIndex((document) => document.id == id);
  }
  //
  create(payload: TDocument) {
    let newData = {
      ...payload,
      created_at: CommonService.datetime(),
      id: CommonService.moid(),
    };
    this.data.push(newData);
    return newData;
  }

  read(id?: TPrimaryKey) {
    return id ? this.findById(id) : this.data;
  }

  search(query: TDocument) {
    let key = Object.keys(query).shift();
    let value = Object.values(query).shift();
    return this.data.find(
      (document) =>
        (document[key as string] as string).search(
          new RegExp(value as string, "i")
        ) > -1
    );
  }

  update(payload: TDocument, id: TPrimaryKey) {
    const record = this.findById(id);
    const i = this.findIndexById(id);
    let newData = {
      ...record,
      ...payload,
      updated_at: CommonService.datetime(),
    };
    this.data[i] = newData;
    return newData;
  }

  delete(id: TPrimaryKey) {
    const record = this.findById(id);
    const i = this.findIndexById(id);
    this.data.splice(i, 1);
    return record;
  }

  trash(id: TPrimaryKey) {
    const record = this.findById(id);
    let newData = {
      ...record,
      deleted_at: CommonService.datetime(),
    };
    return newData;
  }

  restore(id: TPrimaryKey) {
    const record = this.findById(id);
    let newData = {
      ...record,
      deleted_at: null,
    };
    return newData;
  }
}
