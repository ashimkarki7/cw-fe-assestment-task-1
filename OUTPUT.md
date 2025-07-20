## Changes Made

###[BoxArea97]
- Issue: Making BoxArea97 Component Feature in the same Component Level as main app,lacking  modularity,reusability,folder structure
- Fix: Moved `BoxArea97` → `SearchBox.tsx` in `searchbox/`

### BoxArea108
- Issue: Making BoxArea108 Component Feature in the same Component Level as main app, lacking  modularity,reusability,folder structure
- Fix: Moved `BoxArea108` → `SearchInput.tsx` in `searchbox/`

### TagList
- Issue: Making TagList Component Feature in the same Component Level as main app, lacking  modularity,reusability,folder structure
- Fixed :Moved tag badge rendering to `TagList.tsx` under `taglist/`
- Issue: Tag list Items not Clickable
- Fix : Made Tags Clickable, Added Selected Colour 
- Fix : Added useCallback to handle handleTagClick for prop stability
- Issue: No Types Assigned to Pros
- Fix :  Added Types To Props Passes to TagList Element
- Issue: avoiding key conflict in Badge Iteration
- Fix :  Added {`${keyName}-${tag}`} for easy way to trace make to this section later, avoiding diffing algorithm issue later.

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
