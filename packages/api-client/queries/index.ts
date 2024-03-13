// generated with @7nohe/openapi-react-query-codegen@0.5.3 
import { useQuery, useMutation, UseQueryResult, UseQueryOptions, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { Quote } from "../requests/models/Quote";
import { QuoteService } from "../requests/services/QuoteService";
export type QuoteServiceCreateMutationResult = Awaited<ReturnType<typeof QuoteService.create>>;
/**
 * Create a quote
 * Create a quote
 */
export const useQuoteServiceCreate = <TData = QuoteServiceCreateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => QuoteService.create() as unknown as Promise<TData>, ...options });
export type QuoteServicePurchaseMutationResult = Awaited<ReturnType<typeof QuoteService.purchase>>;
/**
 * Purchase a quote
 * Purchase a quote
 */
export const useQuoteServicePurchase = <TData = QuoteServicePurchaseMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: string;
}, TContext>({ mutationFn: ({ id }) => QuoteService.purchase(id) as unknown as Promise<TData>, ...options });
