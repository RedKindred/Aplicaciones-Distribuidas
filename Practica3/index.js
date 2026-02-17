const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 3000;

// Middleware para procesar JSON en el cuerpo (body) de las peticiones
app.use(express.json());

/**
 * Función auxiliar para validar que los parámetros existan
 */
const validateParams = (req, params) => {
    for (const p of params) {
        if (req.body[p] === undefined) return { valid: false, error: `Falta el parámetro: ${p}` };
    }
    return { valid: true };
};

// --- SERVICIOS ---

// i. Mas caracteres
app.post('/mascaracteres', (req, res) => {
    const check = validateParams(req, ['str1', 'str2']);
    if (!check.valid) return res.status(400).json({ status: "error", message: check.error });

    const { str1, str2 } = req.body;
    const result = str2.length > str1.length ? str2 : str1;
    res.json({ status: "success", result });
});

// ii. Menos caracteres
app.post('/menoscaracteres', (req, res) => {
    const check = validateParams(req, ['str1', 'str2']);
    if (!check.valid) return res.status(400).json({ status: "error", message: check.error });

    const { str1, str2 } = req.body;
    const result = str2.length < str1.length ? str2 : str1;
    res.json({ status: "success", result });
});

// iii. Num caracteres
app.post('/numcaracteres', (req, res) => {
    const check = validateParams(req, ['str']);
    if (!check.valid) return res.status(400).json({ status: "error", message: check.error });

    res.json({ status: "success", result: req.body.str.length });
});

// iv. Palindroma
app.post('/palindroma', (req, res) => {
    const check = validateParams(req, ['str']);
    if (!check.valid) return res.status(400).json({ status: "error", message: check.error });

    const cleanStr = req.body.str.toLowerCase().replace(/[\W_]/g, '');
    const reversed = cleanStr.split('').reverse().join('');
    res.json({ status: "success", result: cleanStr === reversed });
});

// v. Concat
app.post('/concat', (req, res) => {
    const check = validateParams(req, ['str1', 'str2']);
    if (!check.valid) return res.status(400).json({ status: "error", message: check.error });

    res.json({ status: "success", result: req.body.str1 + req.body.str2 });
});

// vi. Applysha256
app.post('/applysha256', (req, res) => {
    const check = validateParams(req, ['str']);
    if (!check.valid) return res.status(400).json({ status: "error", message: check.error });

    const hash = crypto.createHash('sha256').update(req.body.str).digest('hex');
    res.json({ status: "success", original: req.body.str, encriptada: hash });
});

// vii. Verifysha256
app.post('/verifysha256', (req, res) => {
    const check = validateParams(req, ['encriptada', 'normal']);
    if (!check.valid) return res.status(400).json({ status: "error", message: check.error });

    const hash = crypto.createHash('sha256').update(req.body.normal).digest('hex');
    res.json({ status: "success", result: hash === req.body.encriptada });
});

app.listen(PORT, () => {
    console.log(`Servidor UPIITA corriendo en http://localhost:3000`);
});