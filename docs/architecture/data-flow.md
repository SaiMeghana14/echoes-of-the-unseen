# Data Flow

```mermaid
flowchart LR

A[Upload Artifact]

A --> B[Discovery Agent]

B --> C[Gemini Analysis]

C --> D[Risk Engine]

C --> E[Future Historian]

C --> F[Knowledge Extraction]

F --> G[Firestore]

F --> H[Pinecone]

F --> I[Neo4j]

G --> J[Dashboard]

H --> J

I --> J
```
