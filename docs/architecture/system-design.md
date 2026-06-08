# 🌌 Echoes of the Unseen - System Architecture

```mermaid
flowchart TD

%% USER LAYER
A[User]

%% FRONTEND
A --> B[Next.js Frontend]

%% UPLOADS
B --> C[Artifact Upload Center]

%% DATA TYPES
C --> D1[Photos]
C --> D2[Audio]
C --> D3[Documents]
C --> D4[Videos]
C --> D5[Websites]

%% API
D1 --> E[Next.js API Gateway]
D2 --> E
D3 --> E
D4 --> E
D5 --> E

%% AGENT SYSTEM
E --> F[Discovery Agent]

F --> G[Gemini 2.5 Pro]

G --> H[Knowledge Extraction]

%% STORAGE
H --> I[Firestore]

H --> J[Firebase Storage]

%% VECTOR DATABASE
H --> K[Gemini Embeddings]

K --> L[Pinecone Vector Store]

%% KNOWLEDGE GRAPH
H --> M[Neo4j Knowledge Graph]

%% RAG
L --> N[RAG Retrieval Layer]

M --> N

%% INTELLIGENCE ENGINE
N --> O[Heritage Intelligence Engine]

%% AGENTS
O --> P[Future Historian Agent]

O --> Q[Risk Prediction Agent]

O --> R[Storytelling Agent]

O --> S[Echo Oracle Agent]

O --> T[Preservation Agent]

%% OUTPUTS
P --> U[Historical Significance Report]

Q --> V[Heritage Risk Score]

R --> W[Living Story Experience]

S --> X[Future Loss Predictions]

T --> Y[Digital Preservation Archive]

%% DASHBOARD
U --> Z[User Dashboard]
V --> Z
W --> Z
X --> Z
Y --> Z
```
