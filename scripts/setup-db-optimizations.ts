*** Begin Patch
*** Update File: scripts/setup-db-optimizations.ts
@@
-import { getBunDatabaseClient, getDbClient } from "lib/db/get-db-client"
+import { getBunDatabaseClient, getDbClient, destroyDbClient } from "lib/db/get-db-client"
@@
-  await db.destroy()
+  await destroyDbClient()
*** End Patch
