import { Module } from '@nestjs/common';
import { UsersControllers } from './users.controller';
@Module({
  imports: [],
  controllers: [UsersControllers],
  providers: [],
})
export class AppModule {}
