import { useState } from "react";
import { Button, Input, Card, Alert, FizzBuzzList } from "../components";
import { useFizzBuzz } from "../hooks/useFizzBuzz";

export function FizzBuzzPage() {
    const [limit, setLimit] = useState("15");
    const { data, loading, error, fetch, reset } = useFizzBuzz();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const num = limit ? parseInt(limit, 10) : undefined;
        fetch(num && num > 0 ? num : undefined);
    };

    return (
        <div className="app">
            <div className="container">
                <header className="header">
                    <h1>FizzBuzz</h1>
                    <p>Générez une séquence FizzBuzz via l'API REST</p>
                </header>

                <Card
                    title="Configuration"
                    className="container"
                    style={{ marginBottom: "1.5rem" }}
                >
                    <form onSubmit={handleSubmit}>
                        <div
                            className="form-row"
                            style={{ marginBottom: "1rem" }}
                        >
                            <Input
                                label="Limite"
                                type="number"
                                min={1}
                                placeholder="15"
                                value={limit}
                                onChange={(e) => setLimit(e.target.value)}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                gap: "0.75rem",
                                flexWrap: "wrap",
                            }}
                        >
                            <Button
                                type="submit"
                                loading={loading}
                                disabled={!limit.trim()}
                            >
                                Générer
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={reset}
                            >
                                Réinitialiser
                            </Button>
                        </div>
                    </form>
                </Card>

                {error && (
                    <Alert variant="error" style={{ marginBottom: "1.5rem" }}>
                        Erreur {error.status}: {error.message}
                    </Alert>
                )}

                {data && (
                    <Card title="Résultat" variant="elevated">
                        <FizzBuzzList data={data} />
                    </Card>
                )}
            </div>
        </div>
    );
}
