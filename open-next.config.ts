import { defineCloudflareConfig } from '@opennextjs/cloudflare'
import kvIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache'
import memoryQueue from '@opennextjs/cloudflare/overrides/queue/memory-queue'
import d1TagCache from '@opennextjs/cloudflare/overrides/tag-cache/d1-next-tag-cache'

import type {} from '@opennextjs/aws/types/open-next.js'

export default defineCloudflareConfig({
  incrementalCache: kvIncrementalCache,
  tagCache: d1TagCache,
  queue: memoryQueue,
})
