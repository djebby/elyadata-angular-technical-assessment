def serializeDict(a) -> dict:
    if a is None: return None
    return { **{i: str(a[i]) for i in a if i == '_id'},
             **{i: a[i] for i in a if i != '_id'}}

def serializeList(entity) -> list:
    return [serializeDict(a) for a in entity]