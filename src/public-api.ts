// src/public-api.ts
// If you kept a module:
export * from './ng-chat/ng-chat.module';

// Or if you switched to standalone, export components/services directly:
export * from './ng-chat/ng-chat.component';
export * from './ng-chat/components/ng-chat-window/ng-chat-window.component';
export * from './ng-chat/core/chat-adapter';
export * from './ng-chat/core/chat-participant';
export * from './ng-chat/core/user';
export * from './ng-chat/core/window';
export * from './ng-chat/core/participant-response';
export * from './ng-chat/core/message-counter';
export * from './ng-chat/core/chat-option';
export * from './ng-chat/core/chat-participant-status.enum';
export * from './ng-chat/core/localization';
export * from './ng-chat/core/chat-participant-status-descriptor';  
export * from './ng-chat/core/message';               
// …add any other public classes you want consumers to use
