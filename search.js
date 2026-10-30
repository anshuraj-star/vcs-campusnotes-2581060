function searchNotes(list, query) {
  const q = query.toLowerCase();
  return list.filter(x => x.toLowerCase().includes(q));
}
