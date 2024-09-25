import { Module } from "@nestjs/common";
import { PropertyTranslationModuleBase } from "./base/propertyTranslation.module.base";
import { PropertyTranslationService } from "./propertyTranslation.service";
import { PropertyTranslationController } from "./propertyTranslation.controller";
import { PropertyTranslationResolver } from "./propertyTranslation.resolver";

@Module({
  imports: [PropertyTranslationModuleBase],
  controllers: [PropertyTranslationController],
  providers: [PropertyTranslationService, PropertyTranslationResolver],
  exports: [PropertyTranslationService],
})
export class PropertyTranslationModule {}
