export interface LoginState {
    attempts: number;
    errorAnimation: boolean;
    showEmptyWarning: boolean;
    showAttemptError: boolean;
    hideMessageTimeout?: ReturnType<typeof setTimeout>;
}
