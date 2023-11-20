import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto";

let USERS = [];
@Controller('/users')
export class UsersControllers {

    @Post()
    addUser(@Body() createUserDto : CreateUserDto){
        USERS.push(createUserDto);
        return 'User Added';
    }

    @Get()
    getUsers(){
        return USERS;
    }

    @Get(':id')
    getUser(@Param('id') id : number){
        return USERS.find((user) => +user.id === +id)
    }

    @Put(':id')
    updateUser(@Param('id') id : number, @Body() updateUserDto : CreateUserDto){
        const userIdx = USERS.findIndex((user) => +user.id === +id)
        if(!userIdx) return;
        USERS[userIdx] = updateUserDto
        return USERS;
    }

    @Delete(':id')
    deleteUser(@Param('id') id : number){
        USERS = USERS.filter((user) => +user.id != +id)
        return USERS;
    }

}