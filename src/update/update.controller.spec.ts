// src/update/update.controller.ts
import { Controller, Get } from '@nestjs/common';
import { Response } from 'express';

@Controller('update')
export class UpdateController {
  // Store the latest bundle metadata
  private latestBundle = {
    version: '1.0.1', // Set your version here
    url: 'http://localhost:3000/bundles/latest-bundle.js', // URL to the bundle
    description: 'Bug fixes and performance improvements',
    mandatory: false, // Set to true if the update is mandatory
  };

  @Get('check')
  checkForUpdate() {
    return this.latestBundle;
  }
}
