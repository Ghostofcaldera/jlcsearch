*** Begin Patch
*** Update File: lib/db/derivedtables/setup-derived-tables.ts
@@
-import { getDbClient } from "lib/db/get-db-client"
+import { getDbClient, destroyDbClient } from "lib/db/get-db-client"
@@
-  } finally {
-    if (shouldDestroy) {
-      await activeDb.destroy()
-    }
-  }
+  } finally {
+    if (shouldDestroy) {
+      // Use the dedicated destroy helper so the module-level singleton is cleared
+      await destroyDbClient()
+    }
+  }
 }
*** End Patch
