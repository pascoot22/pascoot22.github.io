import hashlib

password = "password"

hash_hex = hashlib.sha256((password).encode()).hexdigest()
print(hash_hex)