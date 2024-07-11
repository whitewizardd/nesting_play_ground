import { Injectable } from '@nestjs/common';
import { CreateCatDTO } from './dtos/CreateCat';
import { Cat, cat_repository } from './repo/CatRepo';

@Injectable()
export class CatService {
  create_cat(create_cat_dto: CreateCatDTO): string {
    const created_cat: Cat = {
      id: cat_repository.length + 1,
      name: create_cat_dto.name,
      age: create_cat_dto.age,
      breed: create_cat_dto.breed,
    };
    cat_repository.push(created_cat);
    return created_cat.name;
  }

  get_all_cats(): Cat[] {
    return cat_repository;
  }

  find_cat_by_id(id: number): Cat {
    return cat_repository.find((index) => index.id === id);
  }

  update_cat_by_id(id: number, create_cat_dto: Partial<CreateCatDTO>): string {
    const gotten_cat: Cat = this.find_cat_by_id(id);
    cat_repository[id] = { ...gotten_cat, ...create_cat_dto };
    return 'updated successfully...';
  }

  delete_cat_by_id(id: number): string {
    cat_repository.splice(id, 1);
    return 'successfully deleted...';
  }
}
