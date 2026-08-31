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
  streak: {
    get: 'streak:get',
    recordCompletion: 'streak:recordCompletion',
    increment: 'streak:increment',
    reset: 'streak:reset',
    useFreeze: 'streak:useFreeze',
    addFreeze: 'streak:addFreeze'
  },
  xp: {
    get: 'xp:get',
    add: 'xp:add'
  },
  energy: {
    get: 'energy:get',
    spend: 'energy:spend',
    refund: 'energy:refund',
    refillIfDue: 'energy:refillIfDue'
  },
  quests: {
    get: 'quests:get',
    upsert: 'quests:upsert',
    updateProgress: 'quests:updateProgress',
    claim: 'quests:claim'
  },
  achievements: {
    list: 'achievements:list',
    grant: 'achievements:grant'
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
