# Assignment 9

## How to generate the image
1. Open the Mermaid Live Editor.
2. Copy the Mermaid code below.
3. Paste it into the editor.
4. The diagram will appear automatically.
5. Export it as PNG or SVG.

```
https://mermaid.ai/open-source/syntax/classDiagram.html
```

### Law Firm

```mermaid
classDiagram
    class Client {
        +clientId
        +fullName
        +fullAddress
        +phoneNumbers
        +bestCallTimes
    }

    class Case {
        +caseId
        +caseType
        +description
        +status
        
        +updateStatus(newStatus)
        +assignLawyer(lawyer)
    }

    class Lawyer {
        +lawyerId
        +fullName
    }

    class Document {
        +documentId
        +fileName
        +filePath
    }

    class Conversation {
        +conversationId
        +dateTime
        +summary

        +addSummary(text)
    }

    Client "1" --> "0..*" Case : has
    Case "0..*" --> "0..*" Lawyer : worked on by
    Case "1" --> "1" Lawyer : main lawyer
    Case "1" --> "0..*" Document : has
    Client "1" --> "0..*" Conversation : has
    Case "1" --> "0..*" Conversation : relates to
    Conversation "1..*" --> "0..*" Lawyer : involves
```

### Supermarket

```mermaid
classDiagram
    class Facility {
        +facilityId
        +name
        +address
        +totalBays
        +availableBays
    }

    class Store {
        +branchName
        +publicOpeningHours
        +storageOpeningHours

        +requestMerchandise(item, qty)
    }

    class DistributionCenter {
        +openingHours
    }

    class Bay {
        +bayId
        +isAvailable
    }

    class Merchandise {
        +merchandiseId
        +name
        +department
        +measurementType
    }

    class Inventory {
        +inventoryId
        +quantity

        +updateQuantity(amount)
    }

    class Request {
        +requestId
        +requestedQuantity
        +inTransitQuantity

        +updateTransitQuantity(amount)
    }

    class Truck {
        +licensePlate
        +state (loading/unloading/in transit full/in transit empty/resting/offline)
        +currentCoordinates

        +updateStatus(newStatus)
    }

    class TruckCargo {
        +cargoId
        +quantity
    }

    Facility <|-- Store
    Facility <|-- DistributionCenter

    Store "1" --> "1..*" Bay : has
    DistributionCenter "1" --> "1..*" Bay : has

    DistributionCenter "1" --> "1..*" Store : supplies

    Store "1" --> "0..*" Inventory : has
    Merchandise "1" --> "0..*" Inventory : tracked in

    Store "1" --> "0..*" Request : places
    DistributionCenter "1" --> "0..*" Request : fulfills
    Merchandise "1" --> "0..*" Request : requested as

    Truck "1" --> "0..*" TruckCargo : carries
    Merchandise "1" --> "0..*" TruckCargo : included in

    Truck "0..*" --> "1" Facility : current location
    Truck "0..*" --> "1" Facility : origin
    Truck "0..*" --> "1" Facility : destination

    Bay "0..1" --> "0..1" Truck : occupied by
```