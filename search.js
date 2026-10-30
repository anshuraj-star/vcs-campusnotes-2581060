const searchNotes = (list = [], q = '') => list.filter(x => x.toLowerCase().includes(q.trim().toLowerCase()));
