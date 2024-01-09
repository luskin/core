CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"first_name" text NOT NULL,
	"last_name" text,
	"email" varchar(256) NOT NULL,
	"phone" varchar(256),
	"status" varchar(256) NOT NULL,
	"firebase_auth_id" varchar(256)
);
