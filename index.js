const crypto = require('crypto');

function Crypt(secret) {
    /** Se valida que el cliente proporcione una contraseña o llave a utilizar para el cifrado */
    if (!secret || typeof secret !== 'string') {
        throw new Error('Cryptr: it is mandatory to attach a value that works as a key or password to encrypt');
    }
    /** Establecemos el modo de operación AES a utilizar */
    const algorithm = 'AES-128-CBC';
    
    /** Creamos un hash o buffer (dependerá de la selección que uno escoja) el cual nos ayudará a cifrar lo que nos proporcionen*/
    //const key = crypto.createHash('sha256').update(String(secret), 'utf8').digest('hex');
    //const key = crypto.scryptSync(secret, 'salt', 16);
    const key = Buffer.from(String(secret), 'base64');
    /** Función para encriptar datos */
    this.encrypt = function encrypt(value) {
        /** Validamos que nos proporcionen un valor */
        if (value == null) {
            throw new Error('value must not be null or undefined');
        }
        /** Creamos un inicializador de vector o iv, dependiendo de los bits del cifrado 
         * 128 = 16,
         * 192 = 24,
         * 256 = 32
        */
        //const iv = Buffer.alloc(16, 0);
        const iv = crypto.randomBytes(16);
        /** Inicializamos el cifrado proporcionando: 
         * El algoritmo a utiliza
         * La llave con la cual vamos a encriptar
         * El iv con el buffer o hash a utilizar
        */
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        /** Con la función update, realizamos el verdadero cifrado 
         * el primer parametro a proporcionar es lo que deseamos encriptar
         * en el segundo parametro, indicamos el encode del dato que vamos a encriptar
         * como tercer punto, especificamos como deseamos devolver el dato
        */
        const encrypted = Buffer.concat([cipher.update(String(value), 'utf8'), cipher.final()]);
        const finalData = Buffer.concat([iv, encrypted]);

        return finalData.toString('base64');
    };

    /** Función para desencriptar datos */
    this.decrypt = function decrypt(value) {
        /** Validamos que nos proporcionen un valor */
        if (value == null) {
            throw new Error('value must not be null or undefined');
        }
        const buffer = Buffer.from(value, 'base64');
        const iv = buffer.slice(0, 16)
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        const decrypted = decipher.update(buffer.slice(16), 'binary', 'utf8') + decipher.final('utf8')

        return decrypted;
    }
}

module.exports = Crypt;
