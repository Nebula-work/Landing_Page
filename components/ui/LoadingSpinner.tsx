export function LoadingSpinner() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
            <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
    );
}