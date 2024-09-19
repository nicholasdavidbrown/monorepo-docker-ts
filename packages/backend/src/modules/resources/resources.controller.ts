import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('resources')
export class ResourcesController {
  // Handle GET requests to /v1/resources
  @Get()
  getAllResources() {
    return 'This will return all resources';
  }

  // Handle GET requests to /v1/resources/:id
  @Get(':id')
  getResourceById(@Param('id') id: string) {
    return `This will return the resource with ID: ${id}`;
  }

  // Handle POST requests to /v1/resources
  @Post()
  createResource(@Body() resourceData: any) {
    console.log(resourceData);
    return 'This will create a new resource';
  }
}
