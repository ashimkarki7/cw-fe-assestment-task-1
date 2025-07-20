## Changes Made

###[BoxArea97] 
Refactored component structure for modularity and maintainability:
- Moved `BoxArea97` → `SearchBox.tsx` in `searchbox/`

### BoxArea108
- Moved `BoxArea108` → `SearchInput.tsx` in `searchbox/`

### TagList
- Moved tag badge rendering to `TagList.tsx` under `taglist/`
- Added Types To Props Passes to TagList Element
- ### Header
- Created reusable `Header.tsx` under `header/`




[Example output - you should start from scratch]

## Changes Made

###[Component Name]

1. useEffect in line 37
   - Issue: useEffect missing dependencies causing stale state
   - Fix: Added required dependencies to useEffect array
2. Accessibility issue with the search icon line 98
   - Issue: search icon is not accessible
   - Fix: Added search icon to the input field

### [Another Component Name]

1. ...
   - Issue: ...
   - Fix: ...
2. ...
   - Issue: ...
   - Fix: ...
3. ...
   - Issue: ...
   - Fix: ...
