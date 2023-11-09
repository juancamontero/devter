This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
## ESLint

npx eslint --init

✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser, node
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard-with-typescript
✔ What format do you want your config file to be in? · JSON

in .eslintrc.json:

 ADD
 "parserOptions": {
    ...
    "project": "./tsconfig.json"
  },
  ...
  "rules": {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-misused-promises": "off"
  }

## Supabase

Check [NextJs Supabase Guide](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)

npm install @supabase/auth-helpers-nextjs @supabase/supabase-js -E

crear tabla pública **posts** con campos: **id** (llave), **content** y **user_uid** con llave foránea a **auth/users/id**

Crear tabla pública **users** con campos: **id**, **user_name** y **avatar_url**

Crear función tipo trigger **insert_user_in_public_table_for_new_user**

con esta definición 
```sql
begin
  insert into public.users (id, name, user_name, avatar_url)
  values (
    new.id,
    new.raw_user_meta_data->>'name',
    new.raw_user_meta_data->>'user_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end
```
y en **ADVANCED SETTING**, usar **Type of security** en **SECURITY DEFINER**

Crear trigger que se dispara después que a **auth/user** se le inserta una FILA  y usa la funcion creada **insert_user_in_public_table_for_new_user**

### Supabase types

```bash
echo "MY_TOKEN" | npx supabase login
npx supabase gen types typescript --project-id PROJECT-ID
npx supabase gen types typescript --project-id PROJECT-ID > ./src/app/types/database.ts
```

## NextUi

```bash
pnpm add @nextui-org/react framer-motion
```
## Icons
```bash
pnpm install @tabler/icons-react
```


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
