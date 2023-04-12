# 1399

```console
➜  amplify codegen model-introspection --output-dir .

⚠️  WARNING: Some types do not have authorization rules configured. That means all create, read, update, and delete operations are denied on these types:
         - Post
         - PostNode
Learn more about "@auth" authorization rules here: https://docs.amplify.aws/cli/graphql/authorization-rules
✅ GraphQL schema compiled successfully.

Edit your schema at /Users/josefai/Documents/projects/aws-amplify/reproductions/1399/amplify/backend/api/1399/schema.graphql or place .graphql files in a directory at /Users/josefai/Documents/projects/aws-amplify/reproductions/1399/amplify/backend/api/1399/schema
Cannot read property 'primaryKeyInfo' of undefined
TypeError: Cannot read property 'primaryKeyInfo' of undefined
    at AppSyncModelIntrospectionVisitor.generateModelPrimaryKeyInfo (/snapshot/repo/build/node_modules/@aws-amplify/appsync-modelgen-plugin/lib/visitors/appsync-model-introspection-visitor.js:134:67)
    at AppSyncModelIntrospectionVisitor.generateModelMetadata (/snapshot/repo/build/node_modules/@aws-amplify/appsync-modelgen-plugin/lib/visitors/appsync-model-introspection-visitor.js:82:34)
    at /snapshot/repo/build/node_modules/@aws-amplify/appsync-modelgen-plugin/lib/visitors/appsync-model-introspection-visitor.js:43:49
    at Array.reduce (<anonymous>)
    at AppSyncModelIntrospectionVisitor.generateModelIntrospectionSchema (/snapshot/repo/build/node_modules/@aws-amplify/appsync-modelgen-plugin/lib/visitors/appsync-model-introspection-visitor.js:42:64)
    at AppSyncModelIntrospectionVisitor.generate (/snapshot/repo/build/node_modules/@aws-amplify/appsync-modelgen-plugin/lib/visitors/appsync-model-introspection-visitor.js:29:47)
    at Object.plugin (/snapshot/repo/build/node_modules/@aws-amplify/appsync-modelgen-plugin/lib/plugin.js:55:24)
    at /snapshot/repo/build/node_modules/@graphql-codegen/core/cjs/execute-plugin.js:36:54
    at /snapshot/repo/build/node_modules/@graphql-codegen/core/node_modules/@graphql-codegen/plugin-helpers/cjs/profiler.js:7:49
```
