// IPC channel names shared between main, preload, and renderer.

export const IPC = {
  profiles: {
    list: 'profiles:list',
    get: 'profiles:get',
    create: 'profiles:create',
    update: 'profiles:update',
    remove: 'profiles:remove'
  },
  stages: {
    list: 'stages:list',
    get: 'stages:get',
    paths: 'stages:paths'
  },
  progress: {
    get: 'progress:get',
    upsert: 'progress:upsert',
    listForProfile: 'progress:listForProfile'
  },
  ai: {
    getSession: 'ai:getSession',
    requestHint: 'ai:requestHint',
    recordAttempt: 'ai:recordAttempt',
    checkExplanation: 'ai:checkExplanation'
  },
  resources: {
    list: 'resources:list'
  },
  multi: {
    host: 'multi:host',
    stopHosting: 'multi:stopHosting',
    discover: 'multi:discover',
    join: 'multi:join',
    leave: 'multi:leave',
    startMatch: 'multi:startMatch',
    endMatch: 'multi:endMatch',
    reportStage: 'multi:reportStage',
    state: 'multi:state'
  },
  app: {
    getLang: 'app:getLang',
    setLang: 'app:setLang',
    online: 'app:online',
    getInfo: 'app:getInfo'
  }
} as const
