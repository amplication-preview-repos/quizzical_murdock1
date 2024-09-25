import { Module } from "@nestjs/common";
import { PropertyModule } from "./property/property.module";
import { ClientModule } from "./client/client.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { AgentModule } from "./agent/agent.module";
import { LocaleModule } from "./locale/locale.module";
import { ImageCustomFieldModule } from "./imageCustomField/imageCustomField.module";
import { ListCustomFieldModule } from "./listCustomField/listCustomField.module";
import { PropertyTranslationModule } from "./propertyTranslation/propertyTranslation.module";
import { NormalCustomFieldModule } from "./normalCustomField/normalCustomField.module";
import { CustomFieldListEntryModule } from "./customFieldListEntry/customFieldListEntry.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    PropertyModule,
    ClientModule,
    AppointmentModule,
    AgentModule,
    LocaleModule,
    ImageCustomFieldModule,
    ListCustomFieldModule,
    PropertyTranslationModule,
    NormalCustomFieldModule,
    CustomFieldListEntryModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}