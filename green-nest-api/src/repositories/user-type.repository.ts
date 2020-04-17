import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {UserType, UserTypeRelations, Users} from '../models';
import {DbContextDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UsersRepository} from './users.repository';

export class UserTypeRepository extends DefaultCrudRepository<
  UserType,
  typeof UserType.prototype.id,
  UserTypeRelations
> {

  public readonly users: HasManyRepositoryFactory<Users, typeof UserType.prototype.id>;

  constructor(
    @inject('datasources.dbContext') dataSource: DbContextDataSource, @repository.getter('UsersRepository') protected usersRepositoryGetter: Getter<UsersRepository>,
  ) {
    super(UserType, dataSource);
    this.users = this.createHasManyRepositoryFactoryFor('users', usersRepositoryGetter,);
    this.registerInclusionResolver('users', this.users.inclusionResolver);
  }
}
