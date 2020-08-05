// Validate Date signature
exports.validateDateSignature = (req, res) => {

  if (!req.params.date) {
    res.status(400).json('The date must be informed');
    return
  }

  if (req.params.date.charAt(4) !== '-' && req.params.date.charAt(7) && req.params.date !== 'corpus-christi' && req.params.date !== 'carnival') {
    res.status(400).json("Invalid or malformed date. The date must follow \'YYYY-MM-DD\' format");
    return
  }

  return true
};

// Validate Date
exports.validateDate = (req, res) => {

  if(req.params.date.length === 5 && req.params.date.charAt(2) === '-')
    req.params.date = '2020-' + req.params.date;

  // Validate date signature
  if (exports.validateDateSignature(req, res) !== true) return;

  if (req.params.date === 'corpus-christi' || req.params.date === 'carnival')
    return true;

  exports.validateYear(req, res);

  exports.validateMonth(req, res);

  exports.validateDay(req, res);

  return true
};

// Validate Day
exports.validateDay = (req, res) => {

  // Validate date signature
  if (exports.validateDateSignature(req, res) !== true) return;

  const day = exports.extractDayFromRequest(req, res);

  if (day < 1) {
    res.status(400).json('Invalid or malformed date. The day must be major or equals to \'1\'');
    return
  }

  if (day > 31) {
    res.status(400).json('Invalid or malformed date. The day must be minor or equals to \'31\'');
    return
  }

  return true
};

// Validate Month
exports.validateMonth = (req, res) => {

  // Validate date signature
  if (exports.validateDateSignature(req, res) !== true) return;

  const month = exports.extractMonthFromRequest(req, res);

  if (month < 1) {
    res.status(400).json('Invalid or malformed date. The month must be major or equals to \'1\'');
    return
  }

  if (month > 12) {
    res.status(400).json('Invalid or malformed date. The month must be minor or equals to \'12\'');
    return
  }

  return true
};

// Validate Year
exports.validateYear = (req, res) => {

  // Validate date signature
  if (exports.validateDateSignature(req, res) !== true) return;

  const year = exports.extractYearFromRequest(req, res);

  if (year < 1000) {
    res.status(400).json('Invalid or malformed date. The year must be major or equals to \'1000\'');
    return
  }

  if (year > 9999) {
    res.status(400).json('Invalid or malformed date. The year must be minor or equals to \'9999\'');
    return
  }

  return true
};

// Extract Day from Date
exports.extractDayFromRequest = (req, res) => {

  // Validate date signature
  if (exports.validateDateSignature(req, res) !== true) return;

  return exports.extractDayFromDate(req.params.date)
}

// Extract Month from Date
exports.extractMonthFromRequest = (req, res) => {

  // Validate date signature
  if (exports.validateDateSignature(req, res) !== true) return;

  return exports.extractMonthFromDate(req.params.date)
}

// Extract Year from Date
exports.extractYearFromRequest = (req, res) => {

  // Validate date signature
  if (exports.validateDateSignature(req, res) !== true) return;

  return exports.extractYearFromDate(req.params.date)
}

// Extract Day from Date
exports.extractDayFromDate = (date) => {
  return date.substring(8, 10)
}

// Extract Month from Date
exports.extractMonthFromDate = (date) => {
  return date.substring(5, 7)
}

// Extract Year from Date
exports.extractYearFromDate = (date) => {
  return date.substring(0, 4)
}
