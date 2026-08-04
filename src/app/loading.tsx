const Loading = () => {
    return (
        <div
            style={{
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <span
                aria-label="Loading"
                style={{
                    width: 32,
                    height: 32,
                    borderRadius: "9999px",
                    border: "2px solid var(--outline-variant)",
                    borderTopColor: "var(--electric-volt)",
                    animation: "spin 0.8s linear infinite",
                }}
            />
            <style>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    )
}

export default Loading
