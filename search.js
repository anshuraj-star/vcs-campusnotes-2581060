function searchNotes(list, query) {
  const q = (query || '').trim().toLowerCase();
  return list.filter(x => x.toLowerCase().includes(q));
}
