  connectionGeneration: 0
}
==> Application exited early
==> Common ways to troubleshoot your deploy: https://render.com/docs/troubleshooting-deploys
==> Running 'node server.js'
[dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  override existing env vars with { override: true }
MongoDB connection error: MongoServerError: bad auth : authentication failed
    at Connection.sendCommand (/opt/render/project/src/node_modules/mongodb/lib/cmap/connection.js:320:27)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Connection.command (/opt/render/project/src/node_modules/mongodb/lib/cmap/connection.js:344:26)
    at async continueScramConversation (/opt/render/project/src/node_modules/mongodb/lib/cmap/auth/scram.js:131:15)
    at async executeScram (/opt/render/project/src/node_modules/mongodb/lib/cmap/auth/scram.js:80:5)
    at async ScramSHA1.auth (/opt/render/project/src/node_modules/mongodb/lib/cmap/auth/scram.js:39:16)
    at async performInitialHandshake (/opt/render/project/src/node_modules/mongodb/lib/cmap/connect.js:104:13)
    at async connect (/opt/render/project/src/node_modules/mongodb/lib/cmap/connect.js:24:9) {
  errorLabelSet: Set(2) { 'HandshakeError', 'ResetPool' },
  errorResponse: {
    ok: 0,
    errmsg: 'bad auth : authentication failed',
    code: 8000,
    codeName: 'AtlasError'
  },
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  connectionGeneration: 0
}
==> Running 'node server.js'
[dotenv@17.2.3] injecting env (0) from .env -- tip: 🔐 prevent building .env in docker: https://dotenvx.com/prebuild
MongoDB connection error: MongoServerError: bad auth : authentication failed
    at Connection.sendCommand (/opt/render/project/src/node_modules/mongodb/lib/cmap/connection.js:320:27)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Connection.command (/opt/render/project/src/node_modules/mongodb/lib/cmap/connection.js:344:26)
    at async continueScramConversation (/opt/render/project/src/node_modules/mongodb/lib/cmap/auth/scram.js:131:15)
    at async executeScram (/opt/render/project/src/node_modules/mongodb/lib/cmap/auth/scram.js:80:5)
    at async ScramSHA1.auth (/opt/render/project/src/node_modules/mongodb/lib/cmap/auth/scram.js:39:16)
    at async performInitialHandshake (/opt/render/project/src/node_modules/mongodb/lib/cmap/connect.js:104:13)
    at async connect (/opt/render/project/src/node_modules/mongodb/lib/cmap/connect.js:24:9) {
  errorLabelSet: Set(2) { 'HandshakeError', 'ResetPool' },
  errorResponse: {
    ok: 0,
    errmsg: 'bad auth : authentication failed',
    code: 8000,
    codeName: 'AtlasError'
  },
  ok: 0,
  code: 8000,
  codeName: 'AtlasError',
  connectionGeneration: 0
}
