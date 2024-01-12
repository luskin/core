// generated with @7nohe/openapi-react-query-codegen@0.5.2 
import { useQuery, useMutation, UseQueryResult, UseQueryOptions, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { User } from "../requests/models/User";
import { UserClient } from "../requests/services/UserClient";
export type UserClientcreateMutationResult = Awaited<ReturnType<typeof UserClient.create>>;
export const useUserClientCreate = <TData = UserClientcreateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => UserClient.create() as unknown as Promise<TData>, ...options });
export type UserClientGetByIdDefaultResponse = Awaited<ReturnType<typeof UserClient.getById>>;
export type UserClientGetByIdQueryResult<TData = UserClientGetByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserClientGetByIdKey = "UserClientGetById";
export const useUserClientGetById = <TData = UserClientGetByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useUserClientGetByIdKey, ...(queryKey ?? [{ id }])], queryFn: () => UserClient.getById(id) as TData, ...options });
